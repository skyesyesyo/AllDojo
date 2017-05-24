from flask import Flask, render_template, session, redirect, request, flash
from mysqlconnection import MySQLConnector
import re
import md5

app = Flask(__name__)

app.secret_key = "keyyo"

mysql = MySQLConnector(app, 'my_sweet_wall_demo')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def login_reg():
	return render_template('wall_index.html')

@app.route('/wall')
def wall():
	# Create loop inside of server that packages data so that a message has key call comments that contain a list of all comments in there.
	# query_string = "SELECT users.first_name, users.last_name, messages.content AS m_content, comments.content, messages.created_at FROM users JOIN messages ON users.id = messages.user_id JOIN comments On comments.message_id = messages.id;"
	messages_query = "SELECT messages.id, users.first_name, users.last_name, messages.content, messages.created_at FROM messages JOIN users ON messages.user_id = users.id"
	all_messages = mysql.query_db(messages_query)
	
	for a_message in all_messages:
		comments_query = "SELECT comments.content, users.first_name, users.last_name, comments.created_at FROM comments JOIN users ON comments.user_id =users.id WHERE comments.message_id = :msg_id"
		data = {
		'msg_id':a_message['id']
		}
		a_message['comments'] = mysql.query_db(comments_query, data)

	print all_messages

	return render_template("wall.html", messages=all_messages)

@app.route('/register', methods=["POST"])
def register():
	# VALIFICATION PROCESS!!!
	# check name, email and password
	has_errors = False
	if len(request.form['first_name']) == 0:
		flash("First name cannot be blank")
		has_errors = True
	if len(request.form['last_name']) == 0:
		flash("Last name cannot be blank")
		has_errors = True
	if not EMAIL_REGEX.match(request.form['email']):
		flash("Email is not in valid format")
		has_errors = True
	if len(request.form['password']) < 8:
		flash("Password must be at least 8 characters long")
		has_errors = True
	if request.form['password'] != request.form['password_confirm']:
		flash("Password must be match")
		has_errors = True
	
	if has_errors:
		return redirect('/')

	else:
		# hash the password
		# insert into users table
		hashed_password = md5.new(request.form['password']).hexdigest()
		# print hashed_password
		
		# PASS VALIFICATION
		# But will check user eamil is there.
		query_string = 'SELECT * FROM users WHERE email = :emale'
		data = {
		'emale':request.form['email']
		}
		found_user = mysql.query_db(query_string, data)
		if found_user:
			flash("Email is already regiestered")
			return redirect('/')
		else:
			# Now ADD to DATABASE
			query_string = "INSERT INTO users (first_name, last_name, email, password) VALUES (:f_name, :l_name, :emale, :pw)"
			data ={
			"f_name": request.form['first_name'],
			'l_name': request.form['last_name'],
			'emale' : request.form['email'],
			'pw': hashed_password
			}
			created_user_id = mysql.query_db(query_string, data)
			# What did I get from DATABASE?
			# print created_user_id
			# It print 2   Which is ID of users table


			# How users stay login? Need session!
			session['user_id'] = created_user_id
			# Request for name!
			query_string = "SELECT * FROM users WHERE id = :my_id"
			data = {
			'my_id':created_user_id
			}
			# query request will return list.  We know first itme in list is first name.
			first_item_in_query_list = mysql.query_db(query_string, data)[0]
			second_item_in_query_list = mysql.query_db(query_string, data)[0]

			# print mysql.query_db(query_string, data)
# [{u'password': u'0da7dfc9d8be084d0b1b76e0da5bedfa', u'first_name': u'aa', u'last_name': u'bb', u'id': 8L, u'email': u'st@st.com'}]
			
			session['user_name'] = first_item_in_query_list['first_name']
			session['user_lname'] = second_item_in_query_list['last_name']


			return redirect('/wall')

# Login is 2-step process
	# First check is email match
	# Second see password is correct!  It is save in hashform, thus need to hash and compare.
@app.route('/login', methods=["POST"])	
def login():
	query_string = 'SELECT * FROM users WHERE email = :emale'
	data = {
	'emale':request.form['email']
	}
	email_matched = mysql.query_db(query_string, data)
	if email_matched:
		password_match = email_matched[0]
		input_password = md5.new(request.form['password']).hexdigest()
		if input_password == password_match['password']:
			session['user_name'] = password_match['first_name']
			session['user_lname'] = password_match['last_name']
			session['user_id'] = password_match['id']
			return redirect('/wall')			
		else:
			flash("gosh password!")
			return redirect('/')
	else:
		flash("Check your email dude")
		return redirect('/')

@app.route('/messages', methods=['POST'])
def create_message():
	query_string = "INSERT INTO messages (content, user_id, created_at, updated_at) VALUES (:content, :user_id, NOW(), NOW())"
	data ={
	"content":request.form['content'],
	"user_id":session['user_id']
	}
	mysql.query_db(query_string, data)
	return redirect('/wall')

@app.route('/comments', methods=['POST'])
def create_comment():
	query_string = "INSERT INTO comments (user_id, message_id, content, created_at, updated_at) VALUES (:user_id, :msg_id, :content, NOW(), NOW())"
	data ={
	"user_id":session['user_id'],
	"msg_id": request.form['message_id'],
	"content": request.form['content']
	}
	mysql.query_db(query_string, data)
	return redirect('/wall')
app.run(debug=True)
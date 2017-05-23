from flask import Flask, render_template, redirect, request
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'twitter')

@app.route('/')
def index():
	users = mysql.query_db("select * from users")

	# for user in users:
	# 	print user['first_name']
		# print user.first_name  This doesn't work but one above works.


	return render_template('flask_mysql_index.html', all_users=users)

@app.route('/create_user', methods=["POST"])
def create_user():
	print request.form
	# this is not working atm
	first_name = request.form['first_name']
	last_name = request.form['last_name']
	handle = request.form['handle']

	query = "Insert into users (first_name, last_name, handle) values(:f_name, :l_name, :handle)"

	data={
		"f_name": first_name,
		"l_name": last_name,
		"handle": handle
	}

	mysql.query_db(query, data)

	return redirect('/')


app.run(debug=True)

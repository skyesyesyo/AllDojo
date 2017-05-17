from flask import Flask, render_template, request, redirect, session, flash
import re

app = Flask(__name__)
app.secret_key = "k3yb0ardC4t"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-z]+$')

@app.route('/')
def index():
	# session['greeding']="hello"
	# seesion is a dictionary
	return render_template('index.html')

@app.route('/cc')
def cook():

	#############
	# print session.get('goodbye')
	#############
	# if 'keyname' in session:
	# 	print "that key is there."
	# else:
	# 	print "that key is not there."

	# if 'greeting' in session:
	# 	print session['greeting']
	# else:
	# 	print "greeting not found."
	###############
	# if "goodbye" not in session:
	# if session.get('goodbye') == None:
	# 	session['goodbye'] = "i'm out yo"
	# else:
	# 	print session['goodbye']
	##############
	session['hi'] = session.get('hi', "some default")
	print session['hi']
	return redirect('/')

@app.route('/register', methods=['POST'])
def reg():
	# print request.form
	########
	# print "Name:", request.form['name']
	# print "Email:", request.form['email']
	# print "Password:", request.form['password']
	# print "Confirmation:", request.form['passconf']
	# session['error'] = "cool"
	# if request.form['password'] != request.form['passconf']:
	# 	# print "password and confirmation field must match."
	# 	session['error'] = "password and confirmation field must match."
	# else:
	# 	del session['error']
	###############3
	if request.form['password'] != request.form['passconf']:
		flash("password and confirmation field must match.")
	if not EMAIL_REGEX.match(request.form['email']):
		flash("Please enter a valid email")
	# if ".com" not in request.form['email']:
	# 	flash("your email need to contain .com")
	return redirect('/')

app.run(debug=True)
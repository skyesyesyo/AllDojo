from flask import Flask, render_template, redirect, request, flash, session
import re

app= Flask(__name__)
app.secret_key = "key"

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-z]+$')
NAME_REGEX = re.compile(r'^[0-9]+$')

@app.route('/')
def regi_form():
	if 'email' not in session:
		session['email'] = ''
	# if 'email' not in seesion:
	# 	session['email'] = ''	
	# if 'email' not in seesion:
	# 	session['email'] = ''
	# if 'email' not in seesion:
	# 	session['email'] = ''
	# if 'email' not in seesion:
	# 	session['email'] = ''

	return render_template('regi_form_index.html')

@app.route('/send', methods=["POST"])
def send():
	if len(request.form['email']) < 1 or len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['password']) < 1 or len(request.form['confirm_password']) < 1:
		flash("All fields are required and must not be blank")
	if not EMAIL_REGEX.match(request.form['email']):
		flash("Please enter a valid eamil")
	if request.form['password'] != request.form['confirm_password']:
		flash("Password and confirmation field must match.")
	if request.form['password'] >8:
		flash('Password need to be more than 8 characters')
	if NAME_REGEX.match(request.form['first_name']) or NAME_REGEX.match(request.form['last_name']):
		flash("No number in name yo~")


	return redirect('/')

app.run(debug=True)
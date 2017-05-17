from flask import Flask, redirect, render_template, request, session

app= Flask(__name__)
app.secret_key = "ThisIsSecret"
# You need to set a secret key for security purposes
# routhing rules and rest of server.py below


@app.route('/')
def index():
	return render_template("index.html")



@app.route('/users', methods=['POST'])
def create_user():
	print "Got Post info"

	session['name'] = request.form['name']
	session['email'] = request.form['email']
	return redirect('/show')


@app.route('/show')
def show_user():
	return render_template('user.html', name=session['name'], eamil=session['email'])

app.run(debug=True)
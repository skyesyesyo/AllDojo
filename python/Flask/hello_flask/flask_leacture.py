from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.route('/home')
def home_yo():

	list_of_things=["Propane", "Propane Accessories", "Grills"]
	return render_template('flask_leacture.html', thing="Bobby Hill", my_list=list_of_things)

@app.route('/')
def hahayo():
	return redirect('/home')






app.run(debug=True)
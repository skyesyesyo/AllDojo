from flask import Flask, render_template, redirect, request, flash, session

app= Flask(__name__)
app.secret_key = "key"

@app.route('/')
def survery():
	if 'py_name' not in session:
		session['py_name'] = ''
	if 'py_d_loc' not in session:
		session['py_d_loc'] = ''	
	if 'py_fav' not in session:
		session['py_fav'] = ''	
	if 'py_comment' not in session:
		session['py_comment'] = ''

	return render_template('dojo_survery.html')

@app.route('/result', methods=['POST'])
def result():
	session['py_name'] = request.form['name']
	session['py_d_loc'] = request.form['d_loc']
	session['py_fav'] = request.form['fav']
	session['py_comment'] = request.form['comment']

	if len(session['py_name']) < 1:
		flash("Name cannot be empty!")
		return redirect('/')
	if len(session['py_comment']) >120:
		flash("You talk too much! less than 120 characters yo~")
		return redirect('/')

	return render_template('ds_result.html', name=session['py_name'], fav=session['py_fav'], d_loc=session['py_d_loc'], comment=session['py_comment'])


app.run(debug=True)
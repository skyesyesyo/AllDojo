from flask import Flask, render_template, redirect, request

app= Flask(__name__)

@app.route('/')
def survery():
	return render_template('ds_index.html')
@app.route('/result', methods=['POST'])
def result():
	py_name = request.form['name']
	py_d_loc = request.form['d_loc']
	py_fav = request.form['fav']
	py_comment = request.form['comment']

	return render_template('ds_result.html', name=py_name, fav=py_fav, d_loc=py_d_loc, comment=py_comment)


app.run(debug=True)
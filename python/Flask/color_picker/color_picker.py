from flask import Flask, redirect, render_template, request
app= Flask(__name__)

@app.route('/', methods=['POST'])
def color():
	py_red = request.form['red']
	py_green = request.form['green']
	py_blue = request.form['blue']

	return render_template('cp.html', red=py_red, green=py_green, blue=py_blue)

@app.route('/', methods=['GET'])
def index():
	return render_template('cp.html')
# @app.route('/change', methods=['POST'])
	# py_red = request.form['red']
	# py_green = request.form['green']
	# py_blue = request.form['blue']

# 	return redirect('cp.html' red=py_red, green=py_green, blue=py_blue)

app.run(debug=True)
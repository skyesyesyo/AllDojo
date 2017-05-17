from flask import Flask, redirect, render_template, request

app=Flask(__name__)

@app.route('/')
def no_ninja():
	return render_template('dn_index.html')

@app.route('/ninja/')
def ninja():
	py_ninja_color = 'tmnt.png'
	return render_template('dn_ninja.html', ninja_color=py_ninja_color)

@app.route('/ninja/<color>')
def go_to_ninja_picture(color):

	if color == 'red':
		py_ninja_color = 'raphael.jpg'
	elif color == 'blue':
		py_ninja_color = 'leonardo.jpg'
	elif color == 'orange' :
		py_ninja_color = 'michelangelo.jpg'
	elif color == 'purple' :
		py_ninja_color = 'donatello.jpg'
	else :
		py_ninja_color = 'notapril.jpg'
	return render_template('dn_ninja.html', ninja_color=py_ninja_color)


app.run(debug=True)
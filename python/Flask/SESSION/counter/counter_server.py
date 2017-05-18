from flask import Flask, render_template, redirect, request, session

app=Flask(__name__)
app.secret_key = "key"

# @app.route('/')
# def index():
# 	return render_template("counter_index.html")

@app.route('/')
def count():
	if 'count' not in session:
		session['count'] = 0
	session['count'] += 1
	return render_template("counter_index.html", count=session['count'])

@app.route('/count')
def plus():
	return redirect('/')


app.run(debug=True)
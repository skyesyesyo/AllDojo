from flask import Flask, render_template, redirect, request, session

app=Flask(__name__)
app.secret_key = "key"

# @app.route('/')
# def index():
# 	return render_template("counter_index.html")

@app.route('/')
def index():

	if 'counter' not in session:
		session['counter'] = 0
	session['counter'] += 1
	return render_template("counter_luis_index.html", counter=session['counter'])

@app.route('/addTwo', methods=['POST'])
def add():
	session['counter']+=1
	return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
	# session['counter']-=session['counter']
	session.clear()
	return redirect('/')


app.run(debug=True)

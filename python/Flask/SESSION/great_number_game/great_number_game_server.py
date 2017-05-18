from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "key"

@app.route('/')
def index():
	if 'the_num' not in session:
		session['the_num'] = random.randrange(0,11)
	if 'answer' not in session:
		session['answer'] = "start"
	if 'c_button' not in session:
		session['c_button'] = 'SUBMIT'
	if 'hint' not in session:
		session['hint'] = ""

	return render_template('great_number_game_index.html', the_num=session['the_num'], answer=session['answer'], c_button=session['c_button'], hint=session['hint'])

@app.route('/condition', methods=['POST'])
def condition():
	if session['the_num'] == int(request.form['guess']):
		session['answer'] = "correct" 
		session['c_button'] = 'Play again!'
		session['hint'] = str(session['the_num']) + ' was the number!' 
	if session['the_num'] > int(request.form['guess']):
		session['answer'] = "low" 
		session['hint'] = 'TOO LOW!' 
	if session['the_num'] < int(request.form['guess']):
		session['answer'] = "low" 
		session['hint'] = 'TOO HIGH!' 	
	

	return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
	session.clear()
	return redirect('/')

app.run(debug=True)
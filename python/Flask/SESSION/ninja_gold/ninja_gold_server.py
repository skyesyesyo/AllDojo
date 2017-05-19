from flask import Flask, render_template, request, redirect, session
import random

app= Flask(__name__)
app.secret_key = "key"

@app.route('/')
def index():
	if 'gold' not in session:
		session['gold'] = 0
	if 'result' not in session:
		session['result'] ="green"
	if 'events' not in session:
		session['events'] =[]

	return render_template('ninja_gold_index.html', gold=session['gold'], events=session['events'], result=session['result'] )

@app.route('/process_money', methods=['POST'])
def p_money():
	building = request.form['building']
	casino_w_l = random.randrange(0,2)
	gold_amt_farm = random.randrange(10,21)
	gold_amt_cave = random.randrange(5,11)
	gold_amt_house = random.randrange(2,6)
	gold_amt_casino = random.randrange(0,51)

	

	if building == "farm":
		session['gold'] = session['gold'] + gold_amt_farm
		session['events'].append(gold_amt_farm)
	if building == "cave":
		session['gold'] = session['gold'] + gold_amt_cave
		session['events'].append(gold_amt_cave)
	if building == "house":
		session['gold'] = session['gold'] + gold_amt_house
		session['events'].append(gold_amt_house)
	if building == "casino":
		if casino_w_l == 1:
			session['gold'] = session['gold'] + gold_amt_casino
			session['events'].append((gold_amt_casino, 'green'))
			# session['result'] = "green"
			
		if casino_w_l == 0:
			session['gold'] = session['gold'] - gold_amt_casino
			session['events'].append((gold_amt_casino * -1, 'red'))
			# session['result'] = "red"
			


	return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
	session.clear()
	return redirect('/')

app.run(debug=True)
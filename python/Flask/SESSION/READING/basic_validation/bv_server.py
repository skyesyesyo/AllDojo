from flask import Flask, render_template, redirect, request, session, flash
app= Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():
	return render_template('bv_index.html')

@app.route('/process', methods=['POST'])
def process():
	# do something validations here!
	if len(request.form['name']) < 1:
		#display valication errors
		flash("Name cannot be empty!")
		# just pass a string to the flash function
	else:
		#display sucess message
		flash("Success! Your name is {}".format(request.form['name']))
		# just pass a string to the flash function


	return redirect('/')

app.run(debug=True)
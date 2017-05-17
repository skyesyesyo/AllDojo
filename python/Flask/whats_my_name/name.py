from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def name():
	return render_template('name_index.html')
@app.route('/process', methods=['POST'])
def newname():
	print request.form['name']
	return redirect('/')
app.run(debug=True)

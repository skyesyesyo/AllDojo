from flask import Flask, render_template
# render_template to allow us to render index.html.
app = Flask(__name__)

@app.route('/')

def hello_world():
	# return "Hello World!"
	return render_template('hello.html')

app.run(debug=True)
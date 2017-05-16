from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hw():

	return render_template('hw.html')

app.run(debug=True)
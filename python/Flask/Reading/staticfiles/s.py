from flask import Flask, render_template
app=Flask(__name__)
@app.route('/')
def s():
	return render_template('s.html')
app.run(debug=True)
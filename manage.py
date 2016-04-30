from flask import Flask, render_template
app=Flask(__name__)



@app.route('/book3')
def book3():
	return render_template('book3.html')


@app.route('/')
def index():
	return render_template('my.html')


@app.route('/sign')
def sign():
	return render_template('sign.html')

@app.route('/signin')
def signin():
	return render_template('signin.html')

@app.route('/upload_1')
def upload_1():
	return render_template('upload_1.html')

@app.route('/upload')
def upload():
	return render_template('upload.html')

if __name__=='__main__':
	app.run(host='0.0.0.0')

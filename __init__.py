from flask import Flask, render_template, url_for, flash, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', script="index.js", name="Home Page")

@app.route('/next')
def next():
    return render_template('next.html', script="next.js", name="Next Launch")

@app.route('/upcoming')
def upcoming():
    return render_template("upcoming.html", script="upcoming.js", name="Upcoming")

@app.route('/rockets')
def rockets():
    return render_template("rockets.html", script="rockets.js", name="Rockets")

@app.route('/rockets/<rocket>')
def rocket(rocket):
    return render_template("sRocket.html", script="sRocket.js", name="Rocket", rocket=rocket)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

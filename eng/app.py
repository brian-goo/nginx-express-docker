from flask import Flask
app = Flask(__name__)

@app.route("/eng1")
def index():
    return "hello from flask/eng1"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)
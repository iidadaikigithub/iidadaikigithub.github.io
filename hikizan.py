import datetime
import json
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# 保存するファイル
RESULTS_FILE = "results.json"

# 結果を保存する関数
def save_result(data):
    try:
        with open(RESULTS_FILE, "r") as file:
            results = json.load(file)
    except FileNotFoundError:
        results = []

    results.append(data)

    with open(RESULTS_FILE, "w") as file:
        json.dump(results, file, ensure_ascii=False, indent=4)

# 結果を取得する関数
def load_results():
    try:
        with open(RESULTS_FILE, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

@app.route("/", methods=["GET"])
def index():
    return render_template("hikizanhissansaiten.html")

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data["timestamp"] = timestamp
    save_result(data)
    return jsonify({"message": "Result saved successfully!"})

@app.route("/results", methods=["GET"])
def results():
    return jsonify(load_results())

if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask, render_template_string, request, redirect, url_for
import random
import json
import os
from datetime import datetime, timedelta, timezone

app = Flask(__name__)

RESULTS_FILE = os.path.join(os.path.dirname(__file__), 'results.json')

QUESTION_COUNT = 20

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>かけ算の問題　1から10までランダム出題</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .container { max-width: 800px; margin: auto; }
    .questions { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .question { font-size: 24px; display: flex; align-items: center; }
    .question-number { min-width: 90px; text-align: right; padding-right: 10px; }
    .equation { flex-grow: 1; display: flex; align-items: center; }
    .answer-box { width: 60px; height: 35px; font-size: 24px; text-align: center; margin-left: 10px; }
    .result-mark { font-size: 24px; margin-left: 10px; }
    #submit-btn { margin-top: 30px; padding: 10px 20px; font-size: 20px; }
    h1 { margin-bottom: 30px; }
    .score { font-size: 28px; color: green; margin: 20px 0; }
    .history-link { margin-top: 20px; display: block; }
  </style>
</head>
<body>
  <div class="container">
    <h1>かけざんレベル2</h1>
    {% if score is not none %}
      <div class="score">{{ score }} / {{ total }} 正解</div>
    {% endif %}
    <form method="post">
      <div id="questions" class="questions">
        {% for q in questions %}
        <div class="question">
          <div class="question-number">第{{ loop.index }}問</div>
          <div class="equation">
            {{ q[0] }} × {{ q[1] }} =
            <input type="number" class="answer-box" name="answer{{ loop.index0 }}" value="{{ answers[loop.index0]|default('') }}" autocomplete="off" required>
            {% if results is defined %}
              <span class="result-mark" style="color:{{ 'green' if results[loop.index0] else 'red' }}">{{ '〇' if results[loop.index0] else '×' }}</span>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>
      <input type="hidden" name="questions" value="{{ questions|tojson }}">
      <button id="submit-btn" type="submit">解答する</button>
    </form>
    <a class="history-link" href="{{ url_for('history') }}">採点履歴を見る</a>
  </div>
</body>
</html>
'''

HISTORY_TEMPLATE = '''
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>採点履歴</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .container { max-width: 800px; margin: auto; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
    th { background: #eee; }
    .back-link { margin-top: 20px; display: block; }
  </style>
</head>
<body>
  <div class="container">
    <h1>採点履歴</h1>
    <table>
      <tr><th>日時（日本時間）</th><th>正解数</th><th>全体数</th></tr>
      {% for r in results %}
      <tr>
        <td>{{ r['datetime'] }}</td>
        <td>{{ r['score'] }}</td>
        <td>{{ r['total'] }}</td>
      </tr>
      {% endfor %}
    </table>
    <a class="back-link" href="{{ url_for('main') }}">問題に戻る</a>
  </div>
</body>
</html>
'''

def load_results():
    if os.path.exists(RESULTS_FILE):
        # ファイルが空の場合は空リストを返す
        if os.path.getsize(RESULTS_FILE) == 0:
            return []
        with open(RESULTS_FILE, encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []

def save_result(score, total):
    results = load_results()
    jst = timezone(timedelta(hours=9))
    now = datetime.now(jst).strftime('%Y-%m-%d %H:%M:%S')
    results.append({'datetime': now, 'score': score, 'total': total})
    with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        questions = json.loads(request.form['questions'])
        answers = [request.form.get(f'answer{i}', '') for i in range(len(questions))]
        results = []
        score = 0
        for i, (num1, num2) in enumerate(questions):
            try:
                ans = int(answers[i])
            except ValueError:
                ans = None
            correct = num1 * num2
            is_correct = (ans == correct)
            results.append(is_correct)
            if is_correct:
                score += 1
        save_result(score, len(questions))
        return render_template_string(HTML_TEMPLATE, questions=questions, answers=answers, results=results, score=score, total=len(questions))
    else:
        # 問題生成
        questions = []
        prev1, prev2 = None, None
        for _ in range(QUESTION_COUNT):
            while True:
                n1 = random.randint(1, 10)
                n2 = random.randint(1, 10)
                if n1 != prev1 and n2 != prev2:
                    break
            questions.append([n1, n2])
            prev1, prev2 = n1, n2
        return render_template_string(HTML_TEMPLATE, questions=questions, answers=[None]*QUESTION_COUNT, score=None, total=QUESTION_COUNT)

@app.route('/history')
def history():
    results = load_results()[::-1]
    return render_template_string(HISTORY_TEMPLATE, results=results)

if __name__ == '__main__':
    app.run(debug=True)

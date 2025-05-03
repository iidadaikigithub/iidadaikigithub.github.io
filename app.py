from flask import Flask, request, render_template_string
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# アップロードされたファイルを保存するフォルダ
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    return """
    <h1>簡単なウェブページ</h1>
    <p>これはFlaskを使ったシンプルなウェブページです。</p>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="アップロード">
    </form>
    """

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "ファイルが選択されていません"
    file = request.files['file']
    if file.filename == '':
        return "ファイル名が空です"
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return f"ファイル {filename} をアップロードしました"

if __name__ == '__main__':
    app.run(debug=True)
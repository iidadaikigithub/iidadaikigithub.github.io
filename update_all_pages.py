#!/usr/bin/env python3
import re
import os

# 11から21までのHTMLファイルを更新
for i in range(11, 22):
    filepath = f"otonaninattemo/{i:02d}.html"
    
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 次のページ番号を決定
    next_page = f"{(i+1):02d}.html" if i < 21 else "01.html"
    
    # nextPage関数を探して置き換え
    # パターン1: function nextPage() { window.location.href = "XX.html"; }
    pattern1 = r'function nextPage\(\) \{ window\.location\.href = ["\']' + re.escape(next_page) + r'["\'];? \}'
    replacement1 = f'''function nextPage() {{ 
    const page = document.querySelector('.page, [id^="page"], body > div.book > div');
    if (page) page.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    
    if re.search(pattern1, content):
        content = re.sub(pattern1, replacement1, content)
    else:
        # パターン2: 複数行にわたる場合
        pattern2 = r'function nextPage\(\) \{[^}]*window\.location\.href = ["\']' + re.escape(next_page) + r'["\'];?[^}]*\}'
        if re.search(pattern2, content, re.DOTALL):
            content = re.sub(pattern2, replacement1, content, flags=re.DOTALL)
    
    # CSSにページめくりスタイルを追加（まだない場合）
    if '.page.flipping' not in content and 'perspective:' not in content:
        # </style>の前に追加
        css_addition = '''
  .book {
    position: relative;
    width: 100vw;
    height: 100vh;
    perspective: 2000px;
  }

  .page {
    transform-style: preserve-3d;
    transform-origin: left center;
    transition: transform 1.5s ease-in-out;
  }

  .page.flipping {
    transform: rotateY(-180deg);
  }
'''
        content = content.replace('</style>', css_addition + '</style>')
    
    # ファイルに書き込み
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath}")

print("All files updated!")

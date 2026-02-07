#!/usr/bin/env python3
import re
import os

# 12から21までのHTMLファイルを更新
for i in range(12, 22):
    filepath = f"otonaninattemo/{i:02d}.html"
    
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 次のページ番号を決定
    next_page = f"{(i+1):02d}.html" if i < 21 else "01.html"
    
    # nextPage関数を修正 - bodyにflippingクラスを追加
    old_pattern = r'function nextPage\(\) \{[^}]*const page = document\.querySelector\([^)]+\);[^}]*if \(page\) page\.classList\.add\([\'"]flipping[\'"]\);[^}]*setTimeout\(\(\) => \{[^}]*window\.location\.href = ["\']' + re.escape(next_page) + r'["\'];[^}]*\}, 1500\);[^}]*\}'
    
    new_function = f'''function nextPage() {{ 
    document.body.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    
    if re.search(old_pattern, content, re.DOTALL):
        content = re.sub(old_pattern, new_function, content, flags=re.DOTALL)
    
    # CSSを修正 - .book と .page を body.flipping に変更
    css_old = r'\.book \{[^}]*\}\s*\.page \{[^}]*\}\s*\.page\.flipping \{[^}]*\}'
    css_new = '''body {
    perspective: 2000px;
  }

  body.flipping {
    transform-style: preserve-3d;
    transform-origin: left center;
    transform: rotateY(-180deg);
    transition: transform 1.5s ease-in-out;
  }'''
    
    if re.search(css_old, content, re.DOTALL):
        content = re.sub(css_old, css_new, content, flags=re.DOTALL)
    
    # ファイルに書き込み
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath}")

print("All files updated!")

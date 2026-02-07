#!/usr/bin/env python3
import os

# 全HTMLファイルのnextPage関数からアニメーション遅延を削除
for i in range(2, 22):
    filepath = f"otonaninattemo/{i:02d}.html"
    
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    next_page = f"{(i+1):02d}.html" if i < 21 else "01.html"
    
    # アニメーション付きのnextPage関数を即座に遷移する形に変更
    # パターン: classList.add('flipping') と setTimeout を削除
    
    # 02-10用（page要素がある）
    old1 = f'''function nextPage() {{ 
    page{i}.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    new1 = f'''function nextPage() {{ 
    window.location.href = "{next_page}";
}}'''
    
    if old1 in content:
        content = content.replace(old1, new1)
    
    # 11-21用（body要素を使用）
    old2 = f'''function nextPage() {{ 
    document.body.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    new2 = f'''function nextPage() {{ 
    window.location.href = "{next_page}";
}}'''
    
    if old2 in content:
        content = content.replace(old2, new2)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath}")

print("All files updated - animations removed!")

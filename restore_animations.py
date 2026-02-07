#!/usr/bin/env python3
import os
import re

# 各ページの次のページ画像を取得
page_images = {
    2: "03.jpg", 3: "04.jpg", 4: "05.gif", 5: "06.gif", 6: "07.gif",
    7: "080.gif", 8: "091.gif", 9: "10.jpg", 10: "11.jpg",
    11: "12.jpg", 12: "13.jpg", 13: "14.jpg", 14: "15.gif",
    15: "16.gif", 16: "17.jpg", 17: "18.gif", 18: "191.gif",
    19: "20.jpg", 20: "21.jpg", 21: "01.jpg"
}

for i in range(2, 22):
    filepath = f"otonaninattemo/{i:02d}.html"
    
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    next_page_num = i + 1 if i < 21 else 1
    next_page = f"{next_page_num:02d}.html"
    next_img = page_images.get(i, f"{next_page_num:02d}.jpg")
    
    # nextPage関数を修正
    old_pattern = r'function nextPage\(\) \{[^}]*window\.location\.href = ["\']' + re.escape(next_page) + r'["\'];[^}]*\}'
    
    if i <= 10:
        # 02-10: page要素がある場合
        new_func = f'''function nextPage() {{ 
    const page = document.getElementById('page{i}');
    if (page) page.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    else:
        # 11-21: body要素を使用
        new_func = f'''function nextPage() {{ 
    document.body.classList.add('flipping');
    setTimeout(() => {{
        window.location.href = "{next_page}";
    }}, 1500);
}}'''
    
    content = re.sub(old_pattern, new_func, content, flags=re.DOTALL)
    
    # 02-10: .bookと.pageのCSSを追加/確認
    if i <= 10 and 'transform-origin: left center' not in content:
        css_add = '''
  .book {
    position: relative;
    width: 100vw;
    height: 100vh;
    perspective: 2000px;
  }

  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform-origin: left center;
    transition: transform 1.5s ease-in-out;
  }

  .page.flipping {
    transform: rotateY(-180deg);
  }

  .next-page {
    transform: rotateY(180deg);
    z-index: -1;
  }
'''
        content = content.replace('</style>', css_add + '</style>')
    
    # 11-21: body.flippingのCSSを確認
    if i > 10 and 'body.flipping' not in content:
        css_add = '''
  body {
    perspective: 2000px;
    transform-style: preserve-3d;
    transform-origin: left center;
    transition: transform 1.5s ease-in-out;
  }

  body.flipping {
    transform: rotateY(-180deg);
  }
'''
        content = content.replace('</style>', css_add + '</style>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath}")

print("All files updated with page flip animation!")

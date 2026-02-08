#!/usr/bin/env python3
import re
import os

files = [f"{i:02d}.html" for i in range(2, 22)]

for filename in files:
    filepath = f"/home/codespace/iidadaikigithub.github.io-1/otonaninattemo/{filename}"
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # p.mp3が既にある場合はスキップ
    if 'p.mp3' in content:
        continue
    
    # audioタグを追加（既存のaudioタグの後に）
    if '<audio' in content and 'id="pageSound"' not in content:
        content = re.sub(
            r'(<audio[^>]*></audio>)',
            r'\1\n<audio id="pageSound" src="p.mp3"></audio>',
            content,
            count=1
        )
    elif '<audio' not in content:
        # audioタグがない場合、bodyの最初に追加
        content = re.sub(
            r'(<body[^>]*>)',
            r'\1\n\n<audio id="pageSound" src="p.mp3"></audio>\n',
            content
        )
    
    # nextPage関数にp.mp3再生を追加
    if 'function nextPage()' in content:
        content = re.sub(
            r'(function nextPage\(\)\s*\{)',
            r'\1\n    const pageSound = document.getElementById("pageSound");\n    if(pageSound) { pageSound.currentTime = 0; pageSound.play().catch(e=>{}); }',
            content
        )
    
    # prevPage関数にp.mp3再生を追加（空でない場合）
    if 'function prevPage()' in content and 'window.location.href' in content.split('function prevPage()')[1].split('}')[0]:
        content = re.sub(
            r'(function prevPage\(\)\s*\{)(\s*)(window\.location)',
            r'\1\n    const pageSound = document.getElementById("pageSound");\n    if(pageSound) { pageSound.currentTime = 0; pageSound.play().catch(e=>{}); }\2\3',
            content
        )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filename}")

print("Done!")

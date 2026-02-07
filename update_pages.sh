#!/bin/bash

# 10.html から 21.html までのファイルにページめくりアニメーションを追加

for i in {10..21}; do
  file="otonaninattemo/${i}.html"
  next=$((i + 1))
  prev=$((i - 1))
  
  if [ ! -f "$file" ]; then
    continue
  fi
  
  # 次のページファイル名を決定
  if [ $i -eq 21 ]; then
    next_page="01.html"  # 最後のページは最初に戻る
  else
    next_page="${next}.html"
  fi
  
  # ファイルを読み込んで、ページめくりアニメーションを追加
  # 既存のnextPage関数を置き換える
  
  # バックアップ
  cp "$file" "${file}.bak"
  
  # nextPage関数を探して置き換え
  sed -i 's/function nextPage() { window\.location\.href = /function nextPage() { document.querySelector(".page, #page'${i}', body > div, body > img")?.classList.add("flipping"); setTimeout(() => { window.location.href = /g' "$file"
  sed -i 's/window\.location\.href = "'${next_page}'";/window.location.href = "'${next_page}'"; }, 1500); /g' "$file"
  
  echo "Updated $file"
done

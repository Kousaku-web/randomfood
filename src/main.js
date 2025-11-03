'use strict'


// 入力内容を配列へ渡す
const food = [];
function addOption() {
  const text = document.getElementById("inputText").value;
  if (!text) return;
  food.push(text);
  document.getElementById("stockresult").textContent=food;
}

// スープと具材を決める仕組み
const soup = ["カレー", "キムチ", "ごま豆乳", "みそ", "ちゃんこ風"];

document.getElementById("soupdecide").addEventListener ("click", function() {
  const index =Math.floor(Math.random() * soup.length) ;
  document.getElementById("soupResult").textContent=soup[index];
});

document.getElementById("fooddecide").addEventListener ("click", function() {
  if (food.length === 0){
    document.getElementById("foodResult").textContent="冷蔵庫に何もありません";
    return;
  }
  const index =Math.floor(Math.random() * food.length) ;
  document.getElementById("foodResult").textContent=food[index];
});

// 一覧から選択したものだけを配列に渡したい
// 理解できず保留にしているのは具材の個数もランダムに決まる仕組みのうち、シャッフルのところ。 Fisher–Yates shuffleを理解したら、実装できそう
// 冷蔵庫にあるもの一覧が更新、記録、削除できる仕組み
// 冷蔵庫にあるもの一覧から具材候補を選べる仕組み
// 材料などにキーを割り振るなどして、レシピや揃うと作れるレシピが提案される仕組み
// レシピには満足度、作るめんどくささ、メモなど残せるシステム
// しめも入れる
// 全部決めるとレシピ名が出てくるシステム

// 削除機能追加

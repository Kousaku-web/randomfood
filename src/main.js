'use strict'

// スープを決める
const soup = ["カレー", "キムチ", "ごま豆乳", "みそ", "ちゃんこ風"];

document.getElementById("soupdecide").addEventListener ("click", function() {
  const index =Math.floor(Math.random() * soup.length) ;
  document.getElementById("soupResult").textContent=soup[index];
});

// 入力内容を配列へ渡す
const ourstock = [];
const candidates = [];


document.getElementById("addfood").addEventListener ("click", function () {
  const text = document.getElementById("inputText").value;
  if (!text) return;
  ourstock.push(text);
  createList();
  document.getElementById("inputText").value = "";
  // document.getElementById("stockresult").textContent=food;
});

 

// 入力内容からリスト作成し、チェックボックス、indexをふる

function createList () {
    const list = document.getElementById("candidateList")
    list.innerHTML = "";
    ourstock.forEach (function (item, index) {
      const foodlist = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.index = index;

      const stockfood = document.createTextNode(item)
      
      foodlist.appendChild(checkbox);
      foodlist.appendChild(stockfood);
      list.appendChild(foodlist);
    });
  }


  

// 具材を決める
document.getElementById("fooddecide").addEventListener ("click", function() {
  // チェックがついたものを候補の配列に入れる

  const candidates = [];
  const checkboxes = document.querySelectorAll("#candidateList input[type='checkbox']");
  checkboxes.forEach ((box) => {
    if (box.checked) {
      const index =box.dataset.index;
      candidates.push(ourstock[index]);
    }
  });
  if (candidates.length === 0){
    document.getElementById("foodResult").textContent="冷蔵庫に何もありません";
    return;
  }
  const i =Math.floor(Math.random() * candidates.length) ;
  document.getElementById("foodResult").textContent=candidates[i];
});

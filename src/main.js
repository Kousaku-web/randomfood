'use strict'
{

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


// 配列をシャッフルして返す関数を定義しておく
    function shuffle (array) {
    const newArray = [...array];
    for (let i = newArray.length-1; i > 0; i --) {
    const j  = Math.floor(Math.random() * (i+1));
    [newArray[i],newArray[j]] = [newArray[j],newArray[i]] ;}
    return newArray;
  }

// 配列からランダム番目までを切り取って返す関数
    function getRandomSubset(array) {
    const shuffled = shuffle(array);
    const randomCount = Math.floor(Math.random() * array.length) + 1;
    return shuffled.slice(0, randomCount);
    }

// 具材を決める
document.getElementById("fooddecide").addEventListener ("click", function() {
  
  // チェックがついたものを候補の配列に入れる
  const checkboxes = document.querySelectorAll("#candidateList input[type='checkbox']");
  const candidates = [];

  checkboxes.forEach ((box) => {
    if (box.checked) {
      const index =box.dataset.index;
      candidates.push(ourstock[index]);
    }
  });
    
    if (candidates.length === 0){
    document.getElementById("foodResult").textContent="鍋の具材になりそうなものはありません";
    return;
  }

    const randomizedFoods = getRandomSubset(candidates);
    document.getElementById("foodResult").textContent= randomizedFoods.join("、");
  });
  

}
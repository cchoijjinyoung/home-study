//Ex6: 노드조작: 메뉴추가(createTextNode, Element).
window.addEventListener("load", function(){
  var section = document.querySelector("#ex6");
  var titleInput = section.querySelector(".title-input");
  var menuListUl = section.querySelector(".menu-list");
  var addButton = section.querySelector(".add-button");
  var delButton = section.querySelector(".del-button");

  addButton.onclick = function(){
    var title = titleInput.value;

     var html = '<a href="">'+title+'</a>';
    menuListUl.innerHTML += '<li><a href="">'+title+'</a></li>';

    /* 이렇게 직접만드는것은 힘들다.
    var title = titleInput.value;
    var txtNode = document.createTextNode(title);

    var aNode = document.createElement("a");
    aNode.href="";
    aNode.appendChild(txtNode);

    var liNode = document.createElement("li");
    liNode.appendChild(aNode);

    menuListUl.appendChild(liNode);
    */
    
    /*
    var title = titleInput.value;
    var txtNode = document.createTextNode(title);
    menuListDiv.appendChild(txtNode);
    */
  };
  
  delButton.onclick = function(){
    var liNode = menuListUl.children[0];
    menuListUl.appendChild(liNode);
  };
});

//Ex5: 엘리먼트 노드의 속성 & CSS 속성 변경.
window.addEventListener("load", function(){
  var section = document.querySelector("#ex5");
  var srcInput = ex5.querySelector(".src-input");
  var imageSelect = ex5.querySelector(".img-select");
  var changeButton = ex5.querySelector(".change-button");
  var img = ex5.querySelector(".img");
  var colorInput =  ex5.querySelector(".color-input");

  changeButton.onclick = function() {
     img.src = "images/" +srcInput.value;
    // img.src = "images/" +imageSelect.value;
    // 사용자가 선택한 value값이 imageSelect.value에 등장.
    // img.style.border-color = ?;   --------- 말이 안되는 문법.
    // img.style["border-color"] = colorInput.value;
     img.style.borderColor = colorInput.value;
     console.log(img.className);
  }
});

//Ex4: childNodes를 이용한 노드 선택.
window.addEventListener("load", function(){
  var ex4 = document.querySelector("#ex4");
  var box = ex4.querySelector(".box");
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hello";
  input2.value = "ohora";
});

//Ex3: Selectors API Level1.
window.addEventListener("load", function(){
  var ex3 = document.getElementById("ex3");
  var txtX = ex3.querySelector(".txt-x");
  var txtY = ex3.querySelector(".txt-y");
  var btnAdd = ex3.querySelector(".btn-add");
  var txtSum = ex3.querySelector("input[name=sum]");
  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x+y;
  };
});

//Ex2: 엘리먼트 선택방법 개선하기.
window.addEventListener("load", function(){
  var ex2 = document.getElementById("ex2");
  var txtX = ex2.getElementsByClassName("txt-x")[0];
  var txtY = ex2.getElementsByClassName("txt-y")[0];
  var btnAdd = ex2.getElementsByClassName("btn-add")[0];
  var txtSum = ex2.getElementsByClassName("txt-sum")[0];
  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x+y;
  };
});

//Ex1: 계산기 프로그램
window.addEventListener("load", function(){
  var txtX = document.getElementById("txt-x");
  var txtY = document.getElementById("txt-y");
  var btnAdd = document.getElementById("btn-add");
  var txtSum = document.getElementById("txt-sum");

  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x+y;
  };
});
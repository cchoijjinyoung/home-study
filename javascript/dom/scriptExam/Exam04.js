//Ex4: childNodes를 이용한 노드 선택.
window.addEventListener("load", function(){
  var ex4 = document.querySelector("#ex4");
  var box = ex4.querySelector(".box");

  //<input/><input/> 처럼 붙어있을 때
  //var input1 = box.childNodes[0];
  //var input2 = box.childNodes[1];

  // tag를 대상으로 하면 children을 쓰자.
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hello";
  input2.value = "ohora";
});

//Ex3: Selectors API Level1.
window.addEventListener("load", function(){
  var ex3 = document.getElementById("ex3");
  // css셀렉터 문법(# => id, . => class)
  var txtX = ex3.querySelector(".txt-x");
  // txt-x는 하나니까 querySelector.
  // 만약 input을 배열로 받고싶다!
  // => querySelectorAll 을 사용하자.
  var txtY = ex3.querySelector(".txt-y");
  var btnAdd = ex3.querySelector(".btn-add");
  var txtSum = ex3.querySelector("input[name=sum]");
  // input name="sum" 일 때 
  // querySelector 에 'css selector' 문법을 사용한다면!
  // 이렇게 표현할 수도 있다.
  // jquery가 각광받은 이유.

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

  /*
  var inputs = ex2.getElementsByTagName("input");

  var txtX = input[0];
  var txtY = input[1];
  var btnAdd = input[2];
  var txtSum = input[3];
  */
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
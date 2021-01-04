
//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){

  var section = document.querySelector("#section9");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbody = noticeList.querySelector("tbody");
  var allCheckbox = section.querySelector(".overall-checkbox");
  var delButton = section.querySelector(".del-button");
  var swapButton = section.querySelector(".swap-button");

  allCheckbox.onchange = function(){
    // onchange on/off 처럼 바뀌었을때 실행되는 녀석.
    console.log(allCheckbox.value);
    console.log(allCheckbox.checked);
    // checkbox의 value가 없으므로 기본값이 on으로 나온다.
    // value = "바나나" 면 바나나라고 나오겠지..?
    // 체크하면 checked는 true 아니면 false.

    // 우리는 thead에 있는 체크박스가 바뀌면 input들 값을 모두 가져올 것이다.
    var inputs = tbody.querySelectorAll("input[type='checkbox']");
    // input 타입이 체크박스인 것만 가져올 수 있다.
    for (var i=0; i<inputs.length; i++)
      inputs[i].checked=allCheckbox.checked;
      // all체크박스의 checked와(true/false) 같게 만든다.
  };

  delButton.onclick = function(){
    // checked가 true인 input을 삭제하는것이 아닌!
    // row를 삭제해야하는것이다. 코드를 작성해보자.
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
    // css셀렉터의 sudo클래스 - 체크된 것만 선택적으로 가져오자.
    console.log(inputs.length);
    for(var i=0; i<inputs.length; i++)
    inputs[i].parentElement.parentElement.remove();
    // 부모의 부모(tr)를 삭제한다.
  };

  swapButton.onclick = function(){
    /*
    # 사용한 방법.
    1) 엘리먼트는 2개만 선택하게끔 그 의외는 오류를 띄운다.
    2) 선택된 2개의 엘리먼트의 tr을 trs[]배열에 담는다.
    3) 각각의 tr을 A, B라 칭하겠다.
       A를 클론하여 tr을 하나 더(A2라 칭하겠다.) 생성한다.
    4) B는 replaceWith를 이용하여 A2와 바꾼다.
    5) A는 기존의 A2가 있던 자리에 있는 B와 replaceWith한다.
      * 이렇게 하는 이유는 tr들이 엄청 많다고 생각하면, 서로를 스왑하기란 상대의 자리를 찾아 서로가 바꿔 들어가야 하는데, 자리를 찾는 것이 상당히 까다롭기때문이다.
    */
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
    if(inputs.length != 2) {
      alert("엘리먼트는 2개른 선택하여야만 해요!");
      return;
    }
    var trs = [];
    // inputs라는 두개의 엘리먼트의 tr을 trs배열에 담을 것이다.
    for(var i=0; i<inputs.length; i++)
      trs.push(inputs[i].parentElement.parentElement);

    var cloneNode = trs[0].cloneNode(true);
    trs[1].replaceWith(cloneNode);
    trs[0].replaceWith(trs[1]);

    // trs[0] trs배열이란 지역변수를 참조하고 있기 때문에 함수가 끝나면 쓰레기가 되서 사라진다.
  };
});

//Ex8-2 노드 삽입과 바꾸기
// Ex8 보다 훨씬 직관적으로 할 수 있다.
window.addEventListener("load", function(){

  var section = document.querySelector("#section8");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbodyNode = noticeList.querySelector("tbody");
  var upButton = section.querySelector(".up-button");
  var downButton = section.querySelector(".down-button");

  // tbodyNode에서 첫번째 Element를 고른다.(tr)
  var currentNode = tbodyNode.firstElementChild;//.children[0];

  downButton.onclick = function(){
    var nextNode = currentNode.nextElementSibling;
    if(nextNode == null) {
      alert("더 이상 이동할 수 없습니다.")
      return;
    }
    // 야 nextNode 너 내 앞으로 와!
    currentNode.insertAdjacentElement("beforebegin", nextNode);
  };

  upButton.onclick = function(){
    var prevNode = currentNode.previousElementSibling;
    if(prevNode == null) {
      alert("더 이상 위로 이동할 수 없습니다.")
      return;
    }
    // 야 prevNode 너 내 뒤로 와!
    currentNode.insertAdjacentElement("afterend", prevNode);
  };

});

//Ex8-노드 삽입과 바꾸기
// window.addEventListener("load", function(){

//   var section = document.querySelector("#section8");
  
//   var noticeList =section.querySelector(".notice-list"); 
//   var tbodyNode = noticeList.querySelector("tbody");
//   var upButton = section.querySelector(".up-button");
//   var downButton = section.querySelector(".down-button");

//   // tbodyNode에서 첫번째 Element를 고른다.(tr)
//   var currentNode = tbodyNode.firstElementChild;//.children[0];

//   downButton.onclick = function(){
//     // 아래로 버튼을 누르면,
//       var nextNode = currentNode.nextElementSibling;
//     // 현재노드의 next형제노드를 지정해주고

//       if(nextNode == null) {
//         alert("더 이상 이동할 수 없습니다.")
//         return;
//       }
//       // nextNode가 없으면 오류.(맨아래까지 내려왔으니까.)
//       tbodyNode.removeChild(nextNode);
//       // 그게 아니라면 화면에서 nextNode를 지운다.
//       // 메모리는 남아있다. 참조하는 녀석이 있기때문에.
//       // nextNode를 앞에 칸에 삽입해줘야함.
//       // 현재는 순서가 1234 에서 1(2)34가 되겠지. ---> 2134 로 만들어보자.
//       tbodyNode.insertBefore(nextNode, currentNode);
//       // nextNode를 기준점(currentNode) 앞에 삽입한다.

//       // 사실, remove 필요없이 insertBefore만 해도된다.
//       // 이해를 돕기위해 remove를 사용하였다.
//   };

//   upButton.onclick = function(){
//     var prevNode = currentNode.previousElementSibling;
//     if(prevNode == null) {
//       alert("더 이상 위로 이동할 수 없습니다.")
//       return;
//     }
//     // 아래로 버튼과 다르게, insertBefore 버튼은 기준점의
//     // '앞'으로 이동하는 것이기 때문에 떼어내야할것이 current다.
//     tbodyNode.removeChild(currentNode);
//     // 그 후 current를  prev  앞에 붙인다.
//     tbodyNode.insertBefore(currentNode, prevNode);
//   };

// });

//Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function(){
  var notices = [
      {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
      {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
  ];

  var section = document.querySelector("#section7");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbodyNode = noticeList.querySelector("tbody");
  var cloneButton = section.querySelector(".clone-button");
  var templateButton = section.querySelector(".template-button");

  cloneButton.onclick = function(){
      var trNode = noticeList.querySelector("tbody tr");
      // quertSelector 는 tbody tr중 하나만 가져온다.
      var cloneNode = trNode.cloneNode(true);
      var tds = cloneNode.querySelectorAll("td");
      tds[0].textContent = notices[0].id;
      tds[1].innerHTML = '<a href="">'+notices[0].id+
      '">'+notices[0].title;
      tds[2].textContent = notices[0].regDate;
      tds[3].textContent = notices[0].writerId;
      tds[4].textContent = notices[0].hit;
      tbodyNode.append(cloneNode);
  };

  templateButton.onclick = function(){
    // 연습) notices에 첫번째 두번째 모두 반복문으로 다 복제해보자!
     for(var i=0; i < 2; i++){
      var template = section.querySelector("template");
      var cloneNode = document.importNode(template.content, true);
      // true - 안에 있는 내용을 다 가져오겠다.
      var tds = cloneNode.querySelectorAll("td");
      // tds[0].textContent = notices[0].id;
      // // tds[1].innerHTML = '<a href="">'+notices[0].id+'">'+notices[0].title;
      // // inner 가 좀 불편한데..?
      // var aNode = tds[1].children[0];
      // aNode.href=notices[0].id;
      // aNode.textContent = notices[0].title;
      // tds[2].textContent = notices[0].regDate;
      // tds[3].textContent = notices[0].writerId;
      // tds[4].textContent = notices[0].hit;
      // tbodyNode.append(cloneNode);

        var aNode = tds[1].children[0];
        aNode.href=notices[i].id;
        aNode.textContent = notices[i].title;
        tds[2].textContent = notices[i].regDate;
        tds[3].textContent = notices[i].writerId;
        tds[4].textContent = notices[i].hit;
        tbodyNode.append(cloneNode);
      }
  };
});

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
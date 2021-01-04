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
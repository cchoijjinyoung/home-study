//Ex8-여러 개의 박스 드래그 방식으로 옮기기.
window.addEventListener("load", function(){
  var section = document.querySelector("#section8");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");
  var dragging = false; // 마우스상태(up, down)
  var offset = {x:0, y:0};
  // 첫번째 박스가 아닌 현재 클릭된 박스를 사용할 것이다.
  var current = null;

  container.onmousedown = function(e) {
    // 이 함수에서 현재 박스를 찾을것이다.

    // 클릭대상이 boxes를 포함한 대상인가?
    if(e.target.classList.contains("box")) {
        dragging = true;
        // 맞다면 current를 현재 클릭대상으로 설정해라.
        current = e.target;
        // offset도 여기서 설정해주자.
        offset.x = e.offsetX;
        offset.y = e.offsetY;
  }
};

  container.onmousemove = function(e) {
    // box의 포지션은 html파일에서 style로 주었다.
    if(!dragging) return;
      current.style.left = e.pageX-offset.x + "px";
      current.style.top = e.pageY-offset.y + "px";
  };

  container.onmouseup = function(e) {
    dragging = false;
  };
});

//Ex7-마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
  var section = document.querySelector("#section7");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");
  var dragging = false; // 마우스상태(up, down)
  var offset = {x:0, y:0};


  container.onmousedown = function(e) {
    // 컨테이너를 클릭해도 박스가 마우스에 붙는다.
    // 박스 클릭시에만 해당되게 조건문을 주자.
    if(e.target === box)
      dragging = true;
  };

  container.onmousemove = function(e) {
    // box의 포지션은 html파일에서 style로 주었다.
    if(!dragging) return;
    box.style.left = e.pageX-offset.x + "px";
    box.style.top = e.pageY-offset.y + "px";
  };

  container.onmouseup = function(e) {
    dragging = false;
  };

  box.onmousedown = function(e) {
    offset.x = e.offsetX;
    offset.y = e.offsetY;
  };
});

//Ex6-MouseEvent Position
window.addEventListener("load", function(){
  var section = document.querySelector("#section6");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");

  container.onclick = function(e) {
    //e.x, e.y / e.offsetX, e.offsetY / e.clientX, e.pageX...
    // 클릭한 좌표를 콘솔로 출력.
    console.log("(x,y):"+ e.x + "," + e.y);
    console.log("client(x,y):"+ e.clientX + "," + e.clientY);
    console.log("page(x,y):"+ e.pageX + "," + e.pageY);
    console.log("offset(x,y):"+ e.offsetX + "," + e.offsetY);
    // page - 스크롤을 내리면 y 값이 달라진다.
    // offset - 클릭한 녀석을 기준으로 좌표.
    // -> 박스의 왼쪽위가장자리를 클릭해보고,
    //    마찬가지로 컨테이너의 가장자리를 클릭해보자. 
    

    // box.style.position이 기본적으로 static 으로 되어있음.
    box.style.position = "absolute";
    // 좌표의 숫자를 얻어왔으면, 단위를 적어줘야한다.
    // 안적어주면 실행이 안됨.
    box.style.left = e.x + "px";
    box.style.top = e.y + "px";
  };
  // 실행은 되지만, 브라우저의 스크롤을 내린 후 클릭하면 이상한 점이 발견된다. 다음 에제에서 고쳐보자.
});

//Ex5-Trigger
window.addEventListener("load", function(){
  var section = document.querySelector("#section5");
  var fileButton = section.querySelector(".file-button");
  var fileTriggerButton = section.querySelector(".file-trigger-button");

  fileTriggerButton.onclick = function() {
    var event = new MouseEvent("click", {
      'view':window,
      'bubbles':true,
      'cancelable':true
    });
    fileButton.dispatchEvent(event);
  };
});
//Ex4-서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function(){
  var section = document.querySelector("#section4");
  var tbody = section.querySelector(".notice-list tbody");

  tbody.onclick = function(e) {
    // a태그는 현재 이벤트 발생 후 href속성에 의한 기본행위도 발생한다.(페이지 로드) 이것을 막아보자.
    e.preventDefault();
    var target = e.target;
    if(target.nodeName != "A")
      return;

    if(target.classList.contains = ("sel-button")) {
      // tr
      // var tr = target.parentElement.parentElement;
      var tr = target.parentElement;
      for(; tr.nodeName != "TR"; tr=tr.parentElement);
      // 노드네임이 tr인 녀석을 만날때까지 부모로 다시 돌아온다.
      tr.style.background = "yellow";
    }

    else if(target.classList.contains = ("edit-button")){
      // tr안에 수정하고싶다.
    }

    else if(target.classList.contains = ("del-button")){
      // tr을 삭제하고 싶다.  
    }
  };
});

//Ex3-이벤트 버블링 멈추기.
window.addEventListener("load", function(){

  var section = document.querySelector("#section3");
  var imgList = section.querySelector(".img-list");
  var addButton = section.querySelector(".add-button");
  var currentImg = section.querySelector(".current-img");

  imgList.onclick = function(e) {
    
    if(e.target.nodeName != "IMG") return;
    currentImg.src = e.target.src;
  };
  
  addButton.onclick = function(e) {
    e.stopPropagation(); 
    // 이벤트 버블링을 막아야하는 상황이 생긴다.
    // 버블링을 전파하는것을 막아라.
    // imgList.onclick 이벤트와 현재 이벤트가 동시에 실행됨.
    // 왜냐? 추가버튼이 imgList div영역에 있기 때문.
    // addButton 함수만 실행해라.

    var img = document.createElement("img");
    img.src = "images/img1.jpg";
    currentImg.insertAdjacentElement("afterend", img);
  };
}); 

//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기.
window.addEventListener("load", function(){

  var section = document.querySelector("#section2");
  var imgList = section.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");

  imgList.onclick = function(e) {
    // console.log("test");
    // 비록 클릭당한것은 img하나지만, 이벤트버블링에 의해
    // imgList가 대신 처리해줄 수 있다.
    // 그러나, 현재 문제점이 있는데 img를 클릭하는것 외에도, 
    // imgList의 영역 div를 클릭해도 이벤트가 실행된다..
    if(e.target.nodeName != "IMG") return;
    currentImg.src = e.target.src;
  };
 
}); 

//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){

  var section = document.querySelector("#section1-1");
  var delButtons = section.querySelectorAll(".del-button");

  delButtons.onclick = function(e) {
  };
});

//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

  var section = document.querySelector("#section1");
  
  var imgs = section.querySelectorAll(".img");
  var currentImg = section.querySelector(".current-img");
  
  imgs[0].onclick = function(e){
    // IMG 라는 녀석이 클릭됬다라는것을 콘솔로 띄워보자.
    console.log(e.target.nodeName); // => ING
    currentImg.src = e.target.src;
  };

  imgs[1].onclick = function(e){
    currentImg.src = e.target.src;
  };

  imgs[2].onclick = function(e){
    currentImg.src = e.target.src;
  };

  // for(var i = 0; i<imgs.length; i++)
  //    img[i].onclick = function(e){
  //        currentImg.src = e.target.src;
  //  };  현재 수준으로는 
  //      반복문으로 할 수도 있지만, event 버블링을 배워보자.
});

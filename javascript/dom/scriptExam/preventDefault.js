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

//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기.
window.addEventListener("load", function(){

  var section = document.querySelector("#section3");
  var imgList = document.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");

  imgList.onclick = function(e) {
    // console.log("test");
    // 비록 클릭당한것은 img하나지만, 이벤트버블링에 의해
    // imgList가 대신 처리해줄 수 있다.
    // 그러나, 현재 문제점이 있는데 img를 클릭하는것 외에도, 
    // imgList의 영역 div를 클릭해도 이벤트가 실행된다..
    if(e.target.nodeName != "IMG") return;
    currentImg.src = e.target.src;
  }
 

  // for(var i = 0; i<imgs.length; i++)
  //    img[i].onclick = function(e){
  //        currentImg.src = e.target.src;
  //  };  현재 수준으로는 
  //      반복문으로 할 수도 있지만, event 버블링을 배워보자.
}); 

//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){

  var section = document.querySelector("#section1-1");
  var delButtons = section.querySelectorAll(".del-button")

  for(var i=0; i<delButtons.length; i++) {
      delButtons[i].onclick = function(e) {
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    };
  }
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

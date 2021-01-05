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

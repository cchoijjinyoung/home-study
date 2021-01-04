//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function(){

  var notices = [
      {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
      {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
      {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
      {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
  ];

  var section = document.querySelector("#section10");
  
  var noticeList =section.querySelector(".notice-list");
  var titldTd = section.querySelector(".title");
  var tbodyNode = noticeList.querySelector("tbody");

  var bindData = function(){
      var template = section.querySelector("template");

      for(var i=0; i<notices.length; i++){
          var cloneNode = document.importNode(template.content, true);
          var tds = cloneNode.querySelectorAll("td");
          tds[0].textContent = notices[i].id;            

          var aNode = tds[1].children[0];
          aNode.href=notices[i].id;
          aNode.textContent = notices[i].title;

          tds[2].textContent = notices[i].regDate;
          tds[3].textContent = notices[i].writerId;
          tds[4].textContent = notices[i].hit;

          tbodyNode.appendChild(cloneNode);
      }
  };

  bindData();

  var titleSorted = false;

  titldTd.onclick = function(){
      // 이 부분에 새로 배운 내용을 작성해 보세요.
     
  };
});




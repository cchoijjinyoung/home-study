# :memo: Home-study

나의 공부기록.
QueryDSL 적용하기 - nonogram
2023-06-10 : 스프링 기본정독
objectMapper
스프링부트
restFulAPi 복습

## :exclamation: JavaScript

### :mag: 2020/1/1
- calculate.
  - ==, ===의 차이점.
  - "3" 간의 +, - 의 차이점.
- eval.
  - ```
    var x = 30;' //을 문자열로 입력받았는데 이것을 실행하는 방법
    => eval('var x = 30;');
    // jason parser 
    var data = JSON.parse('{"id":1, "title":"aaa"}');
    // 까탈스럽게 검사.. "id" 처럼 큰따옴표 필수!
    var data2 = {id:2, title:"bbb"};
    var json = JSON.stringify(data2);
    // '{id:2, title:"bbb"}' data2를 문자열로 만든다.
    ```
- for.
  - for-in 문
- function.
- function2.
  - argument란?
- window.
  - 자바스크립트의 유연성
  - 전역변수, 지역변수
- closure.
- window platform.
  - parseInt("12abc") => 12
  - confirm = boolean (확인: true / 취소: false)
- event 프로그래밍.
  - onclick
- element.
  - span - innerText
  - input - value

### :mag: 2020/1/2
- window loading.
  - window.onload = init;
  - 명명 규칙
  - ex) var btnPrint = document.getElementById("btn-print");
- script 코드.
- event binding.
- 예제1 : 계산기1 (+).
  - dir="rtl"
- 예제2 : 계산기2.
  - 일일이 id를 다 주는 것보다 section에 id를 줌으로써 편하게 관리가능.
- 예제3 : selector API.
  - text, #comment들도 다 node, whiteSpace도 node.
- 예제4 : childNode.
- node.
- 예제5-1 : element node 속성 변경.
- 예제5-2 : CSS 속성 변경.
- 예제6 : node 추가/삭제 하기.

### :mag: 2020/1/3
- 예제6-2 : 노드조작 / 메뉴 추가.
- 예제7 : 노드복제와 템플릿태그.
  - cloneNode(true), importNode(  , true)
- 예제8 : 노드 삽입과 바꾸기(위로, 아래로)
  - firstElementChild, prev / nextElementSibling, insertBefore
  - insertAdjacentElement(beforebegin / afterend, 대상)

### :mag: 2020/1/4
- 예제9 : 다중 노드선택 방법과 일괄삭제, 엘리먼트의 자리바꾸기.
  - onchange = 바뀌었을때 실행되는 event
  - checkbox의 value, checked(true, false)
  - input들 중에서 타입을 지정해서 가져오기.
    ```
    var inputs = tbody.querySelectorAll("input[type='checkbox']");
    ```
  - css 셀렉터의 sudo 클래스 = 체크된 것만 선택적으로 가져오기
    ```
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
    ```
  - parentElement 의 parentElement 두 번 연달아 사용해도된다.
  - replaceWith

### :mag: 2020/1/5
- 예제10 : 클릭한 컬럼을 기준으로 레코드 정렬하기(오름차순, 내림차순).
  - sort, reverse
- 이벤트 객체의 target 속성 이용하기.
  - event.target
  - 이벤트 객체를 어떻게 얻을 수 있을까?

### :mag: 2020/1/6
- eventBubbling : img클릭 - imgList가 처리할 수 있다.
- stoppropagation : 버블링 전파 막기.
- 여러 버튼을 가진 화면에서 이벤트의 처리 방법
- 기본 행위를 막아보자 preventDefault();

### :mag: 2020/1/7
- 이벤트 트리거.(event trigger)
  - 유저가 버튼을 클릭한 적이 없는데, 해당 버튼의 이벤트가 실행될 수 있다.
  - 어느 경우에 트리거를 사용하게 될까?
  - A를 통해 발생시킨 이벤트를 B가 실행하게끔 dispatcher해주자.
```
fileTriggerButton.onclick = function() {
    var event = new MouseEvent("click", {
      'view':window,
      'bubbles':true,
      'cancelable':true
    })
    fileButton.dispatchEvent(event);
  }
```
- Mouse 이벤트 포지션.
  - div(클래스: 컨테이너) 안의 박스를 내가 클릭한 곳으로 옮겨보자!
  - position이 기본적으로 static으로 설정되어 있다.
    - box.style.position = "absolute"; 나 "fix"; 등으로 바꿔주자!
  - 좌표의 숫자(x, y) 값을 가져왔다면 px과 같이 단위를 적어주자!

- 마우스 이벤트 좌표 3가지.
  - 페이지 영역, 클라이언트 영역, offset 영역
  - 마우스 드래그를 통해 박스를 이동해보자
  - page(x, y)좌표에서 offset(x, y)좌표를 빼서 박스의 left, top을 변경하자.
  - 박스 클릭시에만 박스를 드래그 할 수 있도록 설정.
  - onmousedown, onmouseup



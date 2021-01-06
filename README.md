# :memo: home-study

나의 공부기록.

## :exclamation: JavaScript

### 2020/1/1
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

### 2020/1/2
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

### 2020/1/3
- 예제6-2 : 노드조작 / 메뉴 추가.
- 예제7 : 노드복제와 템플릿태그.
  - cloneNode(true), importNode(  , true)
- 예제8 : 노드 삽입과 바꾸기(위로, 아래로)
  - firstElementChild, prev / nextElementSibling, insertBefore
  - insertAdjacentElement(beforebegin / afterend, 대상)

### 2020/1/4
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

### 2020/1/5
- 예제10 : 클릭한 컬럼을 기준으로 레코드 정렬하기(오름차순, 내림차순).
  - sort, reverse
- 이벤트 객체의 target 속성 이용하기.
  - event.target
  - 이벤트 객체를 어떻게 얻을 수 있을까?

### 2020/1/6
- eventBubbling : img클릭 - imgList가 처리할 수 있다.
- stoppropagation : 버블링 전파 막기.



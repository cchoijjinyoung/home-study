# 10/26 practice, prepare

## mysql -studydb practice

- mysql -u root -p => 암호 입력.
- use studydb;

### DDL(Data Definition Language), DML(Data Manipulation Language)

- DB 객체(테이블, 뷰, 함수, 트리거 등)를 생성, 변경 , 삭제하는 SQL명령이다.
- 데이터 등록, 변경, 삭제를 다루는 SQL문법.

#### 오늘 복습 내용.

- 테이블 생성, 변경, 삭제
    - create table test1 () , update test1 set column ~ , delete from test1 where ~
- 테이블에 컬럼 추가
- 컬럼에 옵션 추가
- 뷰 생성 - 조회결과를 테이블처럼 사용하는 문법 - select 문장이 복잡할 때 용이.
- 뷰 삭제 - drop view viewname;
- primary key, unique
- auto_increament (컬럼 값 자동 증가) - unique or primary key 여야 가능.
- select 결과를 테이블에 insert 하기
- autocommit - self autocommit = false; -> commit / 커밋 하기 전까지는 rollback; 가능

``` console
create table test2 (
    no int not null primary key auto_increament,
    name varchar(20) not null,
    tel varchar(20) not null,
    kor int
    eng int
    math int
);

insert into test2(name, tel)
    select name, tel from test1 where addr = 'seoul';
```

#### 오늘 예습 내용.

- DQL(Data Query Language)
    - 데이터를 조회할 때 사용하는 문법.
    - select - 테이블의 데이터를 조회할 때 사용하는 명령.
        - select * from test1;
        - select no, name from test1;
        
- 가상의 컬럼 값 조회, 컬럼에 별명 붙이기, 조회할 때 조건 붙이기
    - select no, concat(name,'(',class,')') from test1;
    ```
    select 컬럼명 [as] 별명 ...
    select
        no as num, 
        concat(name, '(',class,')') as title
    from test1;

    // => as 생략 가능
    ```

- where 절과 연산자를 이용하여 조회 조건을 지정할 수 있다.
- "셀렉션(selection)" 이라 한다.
- or, and, not 사용 가능.
    - OR : 두 조건 중에 참인 것이 있으면 조회 결과에 포함시킨다.
    - AND : 두 조건 모두 참일 때만 조회 결과에 포함시킨다.
    - NOT : 조건에 일치하지 않을 때만 결과에 포함시킨다.


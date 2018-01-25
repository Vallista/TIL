# IIFE (Immediately Invoked Function Expressions) - 즉시 함수 호출 표현식

IIFE는 아래와 같은 형태를 가진다.

```javascript
(function() {
  // stuff
})();
```

## 함수 선언 (Function Declaration)과 함수 표현 (Function Expression)

javascript에서 함수를 선언할 수 있고, 표현으로 사용할 수 있다.

#### - 함수 선언 (Function Declaration)

미리 자바스크립트의 실행 컨텍스트에 로딩되어 있는 것을 말한다.

함수 명을 가지고, 함수를 만들면 함수 선언이다.

```javascript
foo();

function foo() {
  console.log('haha');
}

/* 결과
haha
*/
```

위와 같이 foo()를 선언 한 것은 이미 실행 컨텍스트에 로딩이 되어 있어서 호출을 하더라도 컴파일러가 알아온다. 그래서 결과를 출력 할 수 있다.

#### - 함수 표현 (Function Expression)

변수 선언과 똑같으나, 선언시 함수를 넣을 수 있고, 함수의 이름은 생략이 가능하다.

인터프리터가 해당 라인에 도달 했을때만 실행 가능 한 것을 말한다.

즉, 함수를 변수에다 할당 시키면 그 것이 표현이다.

```javascript
foo(); // error

const foo = function() {
  console.log('haha');
}

foo();

/* 결과
error!
haha
*/
```

## 즉시 호출 함수 표현식의 작동

소괄호로 감싸서 함수 선언을 함수 표현식으로 표현할 수 있다.

```javascript
(name = function() {
  console.log('asd');
});

name();

/* 결과
asd
*/
```

위 처럼 표현하면 var등의 데이터 타입을 쓰지 않아도 함수로 등록된다.

선언과 동시에도 사용 가능 하다.

```javascript
(name = function() {
  console.log('asd');
})();

/* 결과
asd
*/
```

이런 형식을 IIFE 라고 한다.

아래처럼 익명 표현식으로 표현할 수도 있다.

```javascript
(function() {
  console.log('asd');
})();
```

다만 이 방법은 나중에 호출을 할 방법이 존재하지 않는다.

이러한 소괄호 안에 함수를 위치시킬 경우 전체를 평가하여 return을 하게 된다.
즉 위의 소스코드는 `console.log('asd')`를 평가하여 반환하게 된다.

## IIFE를 사용하는 이유

IIFE를 사용하는 이유는 전역 변수를 사용하지 않기 위해 사용한다.

아래의 소스코드를 보자

```javascript
var data = 'string';

function AddString(string) {
  data += string;
}

AddString('hihihi');

console.log(data);

/* 결과
stringhihihi
*/
```

이렇게 되면 data는 전역으로 만들어지므로 혹여나 data라는 이름을 사용할 때 문제가 될 수 있다.

```javascript
(function() {
  var data = 'string';

  function AddString(string) {
    data += string;
  }

  AddString('hihihi');

  console.log(data);
})();

/* 결과
stringhihihi
*/
```

이렇게 하면 data는 익명 함수로 만들어지므로 익명함수 내에서만 영향력이 있게 된다.

반복문에서의 클로저 사용시, IIFE를 사용하여 에러를 회피도 할 수 있다.

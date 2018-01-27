# 클로저 (Closure)

MDN에서는 클로저를 아래와 같이 정의한다.

> 클로저는 독립적인 (자유) 변수를 가리키는 말이다. 클로저 안에 정의된 함수는 만들어진 함수를 기억한다.

흔히 클로저는 함수 내에서 함수를 선언하거나 사용하는 행위에 대해서 말하는데, 이러한 행위는 아래와 같이 나타낼 수 있다.

```javascript
function getClosure() {
  var data = 0;

  return function foo() {
    data++;
    return data;
  }
}

var closure = getClosure();

console.log(closure());

/* 결과
  1
*/
```

일반적인 함수 안의 함수를 선언한 결과다.
함수 내부의 scope가 조절되어 있으므로,
`foo`는 상위 function인 `getClosure`의 data에 접근할 수 있어서 data가 증가하여, 1이 되는 것이다.

## 클로저의 특성

javascript에서는 변수에는 아무거나 들어갈 수 있다. 즉 함수, 값, 등등..

```javascript
var data = function () {
  return 1;
}

console.log(data());

/* 결과
  1
*/
```

위의 변수는 함수 표현이며, data를 함수로 표현했기 때문에 data()로 사용할 수 있다.

위의 소스코드를 다시 보자.

```javascript
function getClosure() {
  var data = 0;

  return function foo() {
    data++;
    return data;
  }
}

var closure1 = getClosure();
var closure2 = getClosure();

console.log(closure1());
console.log(closure2());

/* 결과
  1
  1
*/
```

function이 실행될 때 data는 초기 값이 0 으로 된다. 이 0에서 getClosure의 foo 함수는 호출되면서 scope로 인해서 getClosure의 환경을 기억하기 때문에, data를 추가하여 data를 반환한다.

그래서 1의 값을 반환 하는데, 만약 getClosure를 두번 호출하면 어떨까?

closure1과 closure2는 동일한 getClosure를 받았으나 getClosure의 환경을 기억하니, 결과는 1,2가 나와야 맞다고 생각될 것이다.

하지만 결과는 1이 두 번 나오게 된다. 그 이유는 closure1과 closure2가 다른 객체로 생성됐기 때문이다.

즉, closure1, closure2는 서로 다른 환경을 가지고 있다.

## 클로저를 통한 은닉

흔히 쓰이는 객체지향의 은닉화는 class 내부에서 private으로 permission을 주어 숨기게 된다. 다만 javascript에서는 class가 존재하지 않고 function 단위로 움직이기 때문에 function을 통해서 은닉화를 걸어야 하는데, 클로저가 이러한 은닉을 구현하는데 재격이다.

기본적인 함수의 멤버 변수 접근은 아래와 같이 접근할 수 있다.

```javascript
function foo(name) {
    this._name = name;
}

foo.prototype.logCall = function() {
    console.log(this._name);
};

var temp = new foo('hihi');
temp.logCall();
console.log(temp._name);

/* 결과
hihi
hihi
*/
```

프로토타입을 사용하여 logCall이라는 함수를 만들어서 foo의 logCall을 호출했다.
또한 temp에서_name에 직접 접근이 가능하다.

이렇게 사용한 이유는 function은 데이터를 가짐과 동시에 콜을 하기위한 목적으로 사용되었다.

이 것을 클로저로 만들어보면.

```javascript
function foo(name) {
  var _name = name;

  return function () {
    console.log(_name);
  }
};

var temp = foo('hihi');
console.log(temp());

/* 결과
hihi
*/
```

위의 소스코드는 마땅히 내부 변수에 접근 할 방법이 없다.

## 클로저의 사용

아래와 같은 소스코드가 있다고 가정하자.

```javascript
var i;

for(i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};

/* 결과
10
10
10
10
10
10
10
10
10
10
*/
```

오잉? 왜 10만 10번 출력이 될까?

그 이유는, scope가 전역의 i에 있으므로 1000ms 즉 1초후에 i를 출력하는 소스이기 때문이다.

그러면 함수로 한번 래핑을 해보자.

```javascript
var i;

for(i = 0; i < 10; i++) {
  (function(data) {
    setTimeout(function() {
      console.log(data);
    }, 1000);
  })(i);
}

/* 결과
0
1
2
3
4
5
6
7
8
9
*/
```

익명 함수를 호출하여 선언과 동시에 호출을 하였다. (IIFE)

이렇게하니 제대로 동작한다. 그 이유는 `환경을 기억한다` 라고 했다.

즉 첫 예제는 var 의 변수가 전역 스코프로 되어 있기 때문에 다 돌고나서 1초 후의 결과는 10이라는 환경을 기억하기에 호출이 되는 부분인 것이고

두번째 예제는 함수를 통해서 var의 변수가 함수 패리미터로 전달이 된다. 그 패러미터는 함수 안의 환경에 들어가서 data라는 이름으로 그 값을 저장하게 되어 환경이 틀려진다.

함수안의 환경은 전달받은 i 값을 간직하고 있으므로 1초가 지나도 지니게 되는 것이다.

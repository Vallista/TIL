# Scope

Scope는 변수의 수명을 의미한다.

변수가 어디까지 생성이 되는가를 한번 아래의 예제를 통해 보도록 하자.

```javascript
var global = 'hihihi';

function foo() {
  console.log(global);
}

foo();

/* 결과
hihihi
*/
```

그렇다. 위의 소스의 global은 가장 최상단에 선언되었으므로, 전역 변수이다.
그래서 function의 안에서도 global은 호출이 된다.

## 전역 변수의 문제

이렇게 된 전역 변수의 문제는 흔한 이름으로 지을 경우, 함수 내부에서 잘못 쓰이게 된다.

```javascript
var global = 20;

function foo() {
  var global = 30;

  console.log(global);
}

foo();

/* 결과
30
*/
```

위의 결과를 보면, 전역 변수보다 함수내의 지역 변수가 더 우선 순위를 가지게 된다. 이 때의 scope는 함수 외부의 global이 아닌 함수 내부의 global을 가리키게 된다.

그렇다면 이 것을 이용해서 아래와 같이 함수마다 변화를 줄 수 있다.

```javascript
var global = 20;

function foo1() {
  global = 30;
}

function foo2() {
  global = 50;
}

console.log(global);

foo1();

console.log(global);

foo2();

console.log(global);

/* 결과
20
30
50
*/

```

전역으로 선언된 변수의 값은 함수내에서도 존재하기 때문에 값을 바꿀 수 있다.

## 코드 블록

그럼 여기서, 함수 내에서는 지역 변수가 먹힌다는 것을 알았다. 그렇다면 아래와 같은 소스도 지역 변수로 되는지 확인해보자.

```javascript
for(var i = 0; i < 10; i++) {
  console.log(i);
}

i = 22;

console.log(i);

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
22
*/
```

위의 소스코드는 간단한 for 문 안에서 i를 출력하고, 가장 나중에 i에 22를 대입하는 소스이다.

보통의 언어들은 for 내부의 선언한 자료형은 지역 변수로 등록이 되어 for의 외부에서 쓰일 수 없지만 javascript는 저 것도 전역으로 선언된 for이기 때문에 전역으로 선언된다.

그래서 i를 사용할 수 있다. 지역으로 사용하려면 아래와 같이 사용해야 한다.

```javascript
(function() {
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
})()

i = 22;

console.log(i);

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
error!
*/
```

익명 함수를 사용하여 function 내부에서 바로 for를 돌리면서 console.log로 찍어내는 구문을 구현했다. 이렇게 구현하면 지역 변수로 선언이 된다.

## 전역 변수 사용

전역 변수를 사용할 때는 보통 여러개의 전역 변수를 사용하기 보다, 하나의 전역 변수에 object, array등으로 사용하는 방식을 많이 사용한다.

```javascript
var global = {
  names: {
    'jinsoo': 'hi',
    'gwangwhi': 'hoo'
  },
  jobs: {
    'programmer': 'good',
    'modeling': 'job'
  }
};

console.log(global.names.jinsoo);
console.log(global.names.gwangwhi);
console.log(global.jobs.programmer);
console.log(global.jobs.modeling);

/* 결과
hi
hoo
good
job
*/
```

다르게 사용하고 싶다면 익명 함수를 사용하면 된다.

```javascript
(function() {
  var global = {
    names: {
      'jinsoo': 'hi',
      'gwangwhi': 'hoo'
    },
    jobs: {
      'programmer': 'good',
      'modeling': 'job'
    }
  };
})();

console.log(global.names.jinsoo);
console.log(global.names.gwangwhi);
console.log(global.jobs.programmer);
console.log(global.jobs.modeling);

/* 결과
error!
*/
```

외부에서는 접근되지 않는다.

## 정적 유효범위

```javascript
var field = 5;

function foo1() {
  var field = 10;
  foo2();
}

function foo2() {
  console.log(field);
}

foo1();

/* 결과
5
*/
```

위의 소스코드는 foo1의 함수 안에 foo2를 호출하는 예제이다.
해당 소스코드의 결과는 5 인데, 이는 정적 유효범위, 렉시컬 이라고 하는 유효 범위 방식이다.

foo2는 field를 호출한다.
하지만 foo1의 field는 foo1에서의 field 이지만, foo2가 가리키는 field는 foo1의 내부에서의 field가 아닌, 전역으로 선언된 field를 참조한다.

이는 즉 foo2의 선언될 때의 field를 따른다.

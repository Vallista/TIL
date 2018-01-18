# Higher Order Function (고차 함수)

함수형 프로그래밍의 특별한 기능처럼 여겨질 만큼 사용되었으나 딱히 그런건 아니다.

함수형의 간결하고 우아한 기법을 통해 함수의 인자로 함수를 받거나, 그 결과를 함수로 반환하는 함수를 말한다.

인자로 받는 함수는 (callback) 특히 강력하며 자바스크립트에서 자주 보이는 코딩 관례이다.

중복된 코드가 나오면 이는 고차함수로 해결 할 수 있는 추상적인 신호라고 볼 수 있다.

구현시 방복문의 경계에 애매하면서도 올바르게 적용할 수 있다.

## Javascript에서의 고차 함수의 예

forEach, map, reduce, every, some, filter 등의 함수들이 대표적인 고차 함수이다.

함수를 리턴하거나 함수의 인자로 함수를 받는 것을 말한다.

filter를 예로 들자면, 배열의 각 원소에 대해서 callback 함수를 호출하여 true가 리턴되는 경우에만 해당 인자를 리턴 값의 배열에 포함 시킨다.

```javascript
const array = [1,2,3,4,5];
const logArray = (data, index) => {
  console.log('값 : ' + data + ' / 몇 번째 : ' + index);
}

const result = array.forEach(logArray);

/* 출력
   값 : 1 / 몇 번째 : 1
   값 : 2 / 몇 번째 : 2
   값 : 3 / 몇 번째 : 3
   값 : 4 / 몇 번째 : 4
   값 : 5 / 몇 번째 : 5
*/
```

이러한 고차 함수는 표준 라이브러리의 함수들과 사뭇 다르다.
표준 라이브러리의 함수들은 단순한 객체를 전달 받길 원하지만 이러한 고차 함수는 함수를 전달하므로써 객체의 데이터까지 한번에 보낼 수 있는 장점이 있다.

위의 예제는 익명함수로 더 간단하게 만들 수 있다.

```javascript
const array = [1,2,3,4,5];

const result = array.forEach((data, index) => {
  console.log('값 : ' + data + ' / 몇 번째 : ' + index);
});

/* 출력
   값 : 1 / 몇 번째 : 1
   값 : 2 / 몇 번째 : 2
   값 : 3 / 몇 번째 : 3
   값 : 4 / 몇 번째 : 4
   값 : 5 / 몇 번째 : 5
*/
```

만약 이러한 환경이 없었다고 생각하고, 우리는 배열의 데이터를 1씩 더해주는 함수를 만든다고 하자. 그럼 아래와 같은 구현을 할 것 이다.

```javascript
const array = [1,2,3,4,5];

for(let i = 0; i < array.length; i++)
  array[i] += 1;

console.log(array);

/* 출력
   [2,3,4,5,6]
*/
```

이걸 고차 함수로 고치게 되면.

```javascript
const array = [1,2,3,4,5];

const result = array.map((value) => {
  return value + 1;
});

console.log(array);

/* 출력
   [2,3,4,5,6]
*/
```

아주 간단해진다. 이러한 고차 함수의 원리는 함수를 넘겨서 함수의 인자를 넣어주고 하는 차이밖에 없다. 이러한 차이점을 생각하고 직접 고차 함수를 작성해보자.

홀수 짝수를 찾는 예제를 고차 함수로 만들어 보자.

먼저 고차 함수를 생각하지 않고 구현을 해보면 아래와 비슷한 형상으로 구현하게 될 것이다.

```javascript
const array = [3,1,6,2,5,4];

const findOdd = (array) => {
  const oddArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 1)
      oddArray.push(array[i]);
  }

  return oddArray;
};

const findEven = (array) => {
  const evenArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0)
      evenArray.push(array[i]);
  }

  return evenArray;
};

console.log(findOdd(array));
console.log(findEven(array));

/* 출력
   [1,3,5]
   [2,4,6]
*/
```

이렇게 구현한 것을 javascript의 array.prototype.의 고차 함수로 만들어보자.

```javascript
const array = [3,1,6,2,5,4];

const findOdd = (array) => {
  return array.map((value) => {
    return value % 2 === 1;
  });
};

const findEven = (array) => {
  return array.map((value) => {
    return value % 2 === 0;
  });
};

console.log(findOdd(array));
console.log(findEven(array));

/* 출력
   [1,3,5]
   [2,4,6]
*/
```

훨신 더 줄어들었다. 근데 보면 반복되는 패턴이 보인다.
array.map을 사용하며, 차이는 비교할 숫자의 값만 틀린데, 이걸 한번 묶어보도록 하자.

```javascript
const array = [3,1,6,2,5,4];

const find = (array, predicate) => {
  return array.map(predicate(array));
}

const Odd = find(array, (value) => { return value % 2 === 1});
const Even = find(array, (value) => { return value % 2 === 0});

console.log(Odd);
console.log(Even);

/* 출력
   [1,3,5]
   [2,4,6]
*/
```

반복을 고차 함수로 줄여버렸다.

## Reduce

reduce는 각 배열을 돌면서 해당 이벤트를 발생하는 고차 함수다.

```javascript
const array = [1,2,3,4,5];

const result = array.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(result);

/* 출력
   16
*/
```

해당 함수는 아래와 같다.

`(((((1,1), 2), 3), 4), 5)`

`(((((1 + 1) + 2) + 3) + 4) + 5)`

`16`

그래서 결과가 16이 나오게 된다.

### reduce를 이용해서 filter 제작 하기

이 reduce를 이용하면 filter를 제작이 가능해지는데, 먼저 filter를 사용해보자.

```javascript
const array = [1,2,3,4,5];
const filter = array.filter((data) => {
  return data % 2 === 0;
});

console.log(filter);

/* 결과
  2,4
*/
```

짝수를 구별하는 함수를 제작했다. 이 함수를 reduce로 제작해보자.

```javascript
const array = [1,2,3,4,5];
const filter = (arr, predicate) => {
  return array.reduce((acc, value) {
    if (predicate(value) === true)
      acc.push();
    return acc;
  }, []);
};

console.log(filter(array, (value) => {return value % 2 === 0}));

/* 결과
  2,4
*/
```

이렇게 구현이 가능하다.

acc, value는 각각 반환 결과와 현재 돌아가는 값을 가지는데, acc의 초기값은 [] 이므로 여기에 push로 데이터를 추가해주었다.

즉. 배열로 어떤 행위를 하는 것은 `reduce`로 커스터마이징이 가능하다는 것이다.

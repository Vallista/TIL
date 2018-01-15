# MVC와 MVP 그리고 MVVM

MVC, MVP, MVVM은 소프트웨어를 설계할 때 필요한 아키텍쳐이다. 이러한 패턴이 나온 가장 큰 이유는 대규모 프로그램이 될 수록 커져가는 소스들, 사용자에게 보여주는 view 소스코드와 비즈니스 로직이 돌아가는 로직등의 코드들을 view와 함께 로직을 작성하게 되면 굉장히 소스코드가 지저분해지고 관리가 어려워지기 때문이었다. 또한 이러한 하나의 통 소스코드는 재사용적인 측면에서도 좋지 않기 때문에 이러한 개념은 나올 이유가 필연적이었다고 본다.

위의 3개의 아키텍쳐에서 더 좋거나 딱 이것만 정해서 쓰라! 라고는 못한다. 왜냐하면 소프트웨어마다 특성과 제작 속도가 다 틀리기 때문이며 그 안에서도 프로그래머의 역량에 따라 좋은 퍼포먼스를 낼 수도 있기 때문이다.

## MVC

MVC는 Model-View-Controller의 앞글자만 따서 만들어진 아키텍쳐이다.

클라이언트에서 오는 이벤트를 Controller에서 받는다.

![이미지1](http://programminghelp.com/wp-content/uploads/2013/10/mvc_diagram.png)

출처 : AtomsNetwork

#### 데이터 플로우

1. Client에서 event를 행동한다.
2. Controller에서 Client로부터 온 이벤트를 받아서 Model에 전달한다.
3. Model은 해당 이벤트에 대한 데이터를 서버 통신 및 업데이트 후, 로드한다.
4. Model은 해당 데이터를 보여줄 View를 선택하여 화면에 뿌려준다.

#### 문제
View와 Model의 서로 의존적인 문제가 있다.

## MVP

MVC에서의 View와 Model의 서로 의존적인 문제를 해결하고자 나온 패턴, Model-View-Presenter 의 약자이다.

MVP 패턴은 MVC 패턴과 다르게 클라이언트에서 입력받는 이벤트를 View에서 받고, Controller가 Presenter로 변경되었으며 View에서 전달한 정보를 Model로 부터 가공해서 view로 전달한다.

![이미지2](https://cdn-images-1.medium.com/max/1600/1*p2JvbgEir0BusDiiVHMvIA.png)

출처 : Nitin Agarwal, Software Developer in BlueStacks

#### 데이터 플로우

1. Client에서 view로 이벤트가 들어온다.
2. Presenter에 view가 전달하여 model에서 presenter에 데이터 응답을 한다.
3. presenter에서 view에 전달한다.
4. view에서 출력한다.

#### 문제

View와 Model의 의존성을 해결했지만 View와 Presenter가 1:1로 강하게 의존하는 관계가 되었다.

## MVVM

Model-View-Viewmodel의 약자이다.

MVVM은 WPF, Silverlight의 제작자가 만든 아키텍쳐 패턴. Presenter, Controller 대신 viewmodel이 존재함.

MVVM은 Command 패턴과 Data Binding을 사용하는데, 이 두 가지를 사용하면서 view와 viewmodel의 의존성이 사라지게 된다.

View에서 입력이 들어오면 Command 패턴을 통해서 viewmodel에 명령을 내리게 되고, Data Binding을 통해 Viewmodel이 값이 변화하면 View의 값이 바인딩되어 있어서 바뀌게 된다.

![이미지 3](http://www.dotnetcurry.com/images/xamarin/mvvm/mvvm-schema.png)

### 데이터 플로우

1. Client에서 View로 이벤트가 들어온다.
2. Presenter에 view가 전달하여 model에서 presenter에 데이터 응답을 한다.
3. presenter에서 view에 전달한다.
4. view에서 출력한다.

#### 문제

유지 관리가 문제가 될 수 있다. 뷰가 변수 및 표현식에 전부 바인딩이 될 수 있으므로, 시간이 지남에 따라 관계없는 뷰단 로직이 늘어날 수 있다. 좀 귀찮아도 부모의 모델 값에서 직접 가져오는게 좋다. (부모에서 연산하여 가져옴)

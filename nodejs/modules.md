# 이 모듈은 어떤 모듈인가요??

이 파일은 node.js의 수많은 모듈을 쓰면서 가끔 제가 까먹어서 볼 때마다 무슨 모듈인지 정리하는 파일입니다.

# 리스트

추가 요청은 [Pull Request]() 부탁 드립니다.

## A

- [AutoPrefixer](https://github.com/postcss/autoprefixer)

Auto Prefixer는 CSS에서 브라우저 호환 구문을 자동으로 컴파일 (번들링) 시에 추가해주는 모듈입니다.

## B

- [Babel](https://babeljs.io/)

Babel은 ECMA Script 최신 문법을 다양한 브라우저에서 사용할 수 있게 지원하는 Trans-compiler 입니다.

- [Browserify](http://browserify.org/)

browserify는 node module들을 require 가능하도록 해주는 모듈입니다.

## C

- [Chalk](https://github.com/chalk/chalk)

Chalk는 터미널에서 색상을 쉽게 변경할 수 있도록 도와주는 모듈 입니다.

- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

디렉토리의 파일들을 빌드 파일로 옮겨주는 webpack plugin 입니다.

- [css-loader](https://github.com/webpack-contrib/css-loader)

webpack에서 css 파일을 로드하기위해 사용하는 로더 입니다.

## E

- [eslint](https://eslint.org/)

ECMA Script Lint 표준을 체크해주는 모듈 입니다.

- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

텍스트를 파일단위로 때어내는 webpack 플러그인 입니다.

## F

- [file-loader](https://github.com/webpack-contrib/file-loader)

webpack 환경에서 파일을 로드할 수 있게 해쉬 스트링으로 번들링 해주는 로더 입니다.

- [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)

webpack error시 display에서 핸들링해주는 webpack plugin 입니다.

## H

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

webpack 번들을 제공하기 위해 HTML 파일을 간단하게 만드는 webpack 플러그인.
이는 컴파일 할 때마다 변경되는 파일 이름에 해시가 포함 된 webpack 번들에 특히 유용합니다. 플러그인이 HTML 파일을 생성하도록하거나, lodash 템플릿을 사용하여 템플릿을 제공하거나 자체 로더를 사용할 수 있습니다.

## N

- [NightWatch](http://nightwatchjs.org/)

NightWatch는 브라우저에서 E2E 테스트를 할 때 사용하는 셀레니움 웹드라이버에서 Javascript와 호환성이 좋지 못해 Node에서 셀레니움 웹 드라이버를 바인딩 하여 나온 모둘입니다.

- [node-notifier](https://github.com/mikaelbr/node-notifier)

어떠한 이벤트가 콘솔창에서 나오면, 팝업을 띄워주는 모듈 입니다.

## O

- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

CSS 자산을 최적화하거나 최소화하는 Webpack 플러그인입니다.

- [Ora](https://github.com/sindresorhus/ora)

Ora는 Terminal 안에서 로딩 애니메이션을 쉽게 사용할 수 있도록 제공하는 모듈 입니다.

## P

- [portfinder](https://www.npmjs.com/package/portfinder)

portfinder는 현재 포트가 로컬에서 열려있는지 체크하는 모듈입니다.

- [postcss-import](https://github.com/postcss/postcss-import)

이 플러그인은 로컬 파일, 노드 모듈 또는 웹의 모듈들을 사용할 수 있습니다.
@import 규칙의 경로를 확인하기 위해 루트 디렉토리 (기본적으로 process.cwd ()), web_modules, node_modules 또는 로컬 모듈을 조사 할 수 있습니다. 모듈을 가져올 때 스타일 또는 기본 필드의 package.json에서 참조되는 index.css 또는 파일을 찾습니다. 또한 보려는 위치를 수동으로 배수로 지정할 수도 있습니다.

- [postcss-loader](https://github.com/postcss/postcss-loader)

post-css로 css를 처리하는 웹팩용 로더입니다.

post-css는 js플러그인으로 스타일을 변형하는 도구입니다. variables 그리고 mixins, transpile 버전 높은 CSS syntax, inline images 등을 지원합니다.

PostCSS는 Wikipedia, Twitter, Alibaba 및 JetBrains를 포함한 업계 선두 업체에서 사용됩니다. Autoprefixer PostCSS 플러그인은 가장 많이 사용되는 CSS 프로세서 중 하나입니다.

- [postcss-url](https://github.com/postcss/postcss-url)

리베이스 같은 행동을 위한 플러그인 입니다. url() 에서의 인라인 또는 복사를 사용 할 수 있습니다.

## R

- [rimraf](https://github.com/isaacs/rimraf)

노드에서 UNIX 명령 rm -rf를 내릴 수 있는 플러그인 입니다.
이게 필요한 이유는 파일이 삭제되고 나서 progress를 알 수 있기 때문입니다.

## S

- [SemVer](https://docs.npmjs.com/misc/semver)

The semantic versioner for npm
npm에서 시멘틱하게 버저닝할 수 있는 규약을 도와주는 모듈 입니다.

- [shelljs](https://github.com/shelljs/shelljs)

노드에서 shell의 명령어를 사용할 수 있게 제공해주는 모듈입니다.

## U

- [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

이 플러그인은 UglifyJS v3 (`uglify-es`)를 사용하여 자바 스크립트를 축소합니다.

- [url-loader](https://github.com/webpack-contrib/url-loader)

파일을 `base64` 인코딩 된 URL로 로드합니다.

## V

- [vue-loader](https://github.com/vuejs/vue-loader)

vue-loader는 Vue 컴포넌트를 일반적인 자바스크립트 모듈로 변환할 수 있는 webpack에서 사용하는 로더입니다.

- [vue-style-loader](https://github.com/vuejs/vue-style-loader)

`style-loader`를 기반으로하는 포크입니다.
`style-loader`와 마찬가지로 CSS 로더 뒤에 CSS를 연결하여 스타일 태그로 CSS를 동적으로 삽입 할 수 있습니다. 그러나 이것은 종속성으로 포함되어 있고 기본적으로 vue-loader에서 사용되므로 대부분의 경우이 로더를 직접 구성 할 필요가 없습니다.

`style-loader`와 다른 점

서버 측 렌더링 지원
target : 'node'로 묶을 때 렌더링 된 모든 구성 요소의 스타일이 수집되어 Vue 렌더 컨텍스트 객체에 context.styles로 표시됩니다.이 스타일 컨텍스트는 마크 업의 <head>에 간단히 삽입 할 수 있습니다. Vue SSR 앱을 제작하는 경우 JavaScript 파일에서 가져온 CSS에도이 로더를 사용해야합니다.

- [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)

이 패키지는 런타임 컴파일 오버 헤드 및 CSP 제한을 피하기 위해 Vue 2.0 템플릿을 렌더링 함수로 미리 컴파일하는 데 사용할 수 있습니다. 매우 구체적인 요구 사항을 가진 빌드 도구를 작성하는 경우에만 필요합니다. 대부분의 경우 vue-loader 또는 vueify를 사용해야하며 둘 다 내부적으로 이 패키지를 사용합니다.

## W

- [webpack](https://webpack.github.io/)

webpack은 모듈 번들러 입니다.

- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

Webpack 번들 분석기
대화식으로 확대 / 축소 가능한 트리 맵으로 웹팩 출력 파일의 크기를 시각화합니다.

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

실시간 재로드를 제공하는 개발 서버와 함께 webpack을 사용 가능한 모듈입니다.
개발용으로만 사용해야 합니다. Webpack 에셋에 대한 빠른 메모리 내 액세스를 제공하는 Webpack-dev-middleware를 사용합니다.

- [webpack-merge](https://github.com/survivejs/webpack-merge)

webpack-merge는 배열을 연결하고 새 객체를 만드는 객체를 병합하는 병합 기능을 제공합니다. 함수가 발생하면 함수를 실행하고 알고리즘을 통해 결과를 실행 한 다음 함수 내에서 반환 된 값을 다시 래핑합니다.

이 동작은 webpack을 구성하는 데 특히 유용하지만 그 이상의 용도는 있습니다. 구성 객체를 병합해야 할 때마다 webpack-merge가 유용 할 수 있습니다.

또한 webpack 특정 사항을 고려할 수 있는 merge.smart라고하는 webpack 관련 병합 변형이 있습니다 (즉, 로더 정의를 병합 할 수 있음).

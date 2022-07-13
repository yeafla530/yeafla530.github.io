# React기반 Gatsby로 블로그 만들기

## 1. JAM Stack

>  JAM Stack이란, Javascript, API, MarkUp Stack의 약자로 자바스크립트와 API, HTML이나 CSS등을 칭하는 MarkUp으로 이루어진 웹 구성 방법
>
> 더 빠르고 안전하며 스케일링하기 쉬운 웹을 만들기 위해 디자인된 아키텍쳐



![img](https://cdn.inflearn.com/public/files/courses/326897/units/75995/0a45a363-2b26-4848-bdc9-a6d05bbe367c/gatsby-lecture-1-1-2.png)

* 기존 웹사이트 방식은 대부분 서버에서 데이터 베이스 또는 CMS(Content Management System)로부터 추출한 데이터를 프론트엔드에 뿌려주는 방식 -> 복잡하다
* JAM Stack은 기존 웹사이트 방식과 다르게 절차가 매우 간단
* 각종 마크업 요소와 다양한 API를 통해 만든 정적 웹사이트를 Pre-Render한 것을 CDN(Content Delivery Networ)을 통해 웹사이트를 열람할 수 있다



## JAM Stack 장점

1. 기존 방식에 비해 더 빠르게 웹사이트를 제공할 수 있다
   * 렌더링할 화면들을 모두 Pre-Render하여 제공되어 그만큼 사용자에게 화면 보여주는 시간을 단축한다
   * 첫 응답을 받기까지 걸리는 TTFB(Time to First Byte)를 최소화하는 데에는 미리 빌드 된 파일을 CDN을 통해 제공한다 (가장 나은 방법)
2. 안전한 웹 사이트를 제공한다
   * JAM Stack은 API를 통해 정적 사이트를 생성함
   * 여기서 사용되는 API는 각 프레임워크에서의 마이크로 서비스로서 사이트 생성을 위한 프로세서가 추상화되어있기 때문에 공격 노출 범위가 감소하게 된다
3. 스케일링하기 쉬운 웹사이트를 제공한다
   * 정적 웹 사이트에서의 스케일링은 더 많은 지역에서 홈페이지 제공할 수 있게 하는 의미인데ㅡ 미리 빌드된 파일 제공을 담당하는 CDN이 그 역할을 해낸다



## 왜 Gatsby

![img](https://cdn.inflearn.com/public/files/courses/326897/units/75995/cc2d1cd8-0d72-484d-9ffe-bd5d9d50fdb8/gatsby-lecture-1-1-3.png)

* React기반 프레임워크, Next.js가 1위, Gatsby가 2위
* 왜 1위인 Next.js안쓰고 Gatsby를 쓰는가?
  * Next.js는 정적 사이트 생성기능도 있지만 주로 서버 사이드 렌더링을 위해 사용하는 프레임워크, 즉 서버와 통신을 해 요청을 받을때마다 동적으로 웹사이트를 생성
  * Gatsby는 서버없이 오로지 정적 사이트 생성을 위해 사용하는 프레임워크 => 블로그, 소개페이지, 포트폴리오 등에 많이 사용됨
  * 블로그 개발이 목적이어서 Gatsby 사용 



# Gatsby & GraphQL

## Gatsby

> Gatsby는 React를 사용하는 `JAM Stack 기반 프레임워크`

## GraphQL

> 페이스북에서 개발한 쿼리 언어

* 각각의 엔드 포인트에서 고정된 데이터를 받을 수 있는 Rest API

* 그와 다르게 GraphQL은 단일 엔드포인트에서 원하는 데이터만을 받을 수 있다는 장점을 가지고 있음

* Query를 통해 데이터를 받아올 수 있으며 이외에도 데이터 변경을 위한 Mutation, 실시간 기능을 위한 Subscription이 있음

  ```
  query getHeroInfo {
  	hero {
  		name
  		age
  		ability
  	}
  }
  ```

* [Gatsby 공식 홈페이지에서의 GraphQL 설명]: https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/	"Gatsby 공식 홈페이지에서의 GraphQL 설명"

* Gatsby에서는 GraphQl을 주로 페이지 또는 Static Query 컴포넌트에서 필요한 데이터를 받아오기 위해 사용된다
* 프로젝트에서 제목, 개발자 정보, 홈페이지 요약같은 기본 정보와 블로그 콘텐츠 데이터를 관리하는데 GraphQL을 사용할 것
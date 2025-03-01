# Monorepo - blog

<div align="center">

<a href='https://blog-384003056882.asia-northeast1.run.app/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-blog-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Blog 패키지 입니다. 학습하고 경험한 것들을 남기는 블로그 입니다. 메인 페이지와 블로그 목록 페이지 , post 페이지로 이루어져 있습니다. 서버에서 게시글 데이터를 가져와 사용합니다.

1. **노드 버전 (>= 20.0.0)**

   ```sh
   node --version
   ```

2. **yarn 버전 (4.4.1)**
   ```sh
   yarn --version
   ```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔶 Technology Stack

- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://ko.vitejs.dev/guide/)
- [Github action](https://github.com/features/actions)
- [Google Cloud Platform](https://cloud.google.com/?hl=ko)
- [Docker](https://www.docker.com/)
- [Sass](https://sass-lang.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Recoil](https://recoiljs.org/)
- [Vitest](https://vitest.dev/)
- [Mock Service Worker](https://mswjs.io/)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
blog
├── src
│   ├── apis
│   ├── assets
│   ├── clients
│   ├── components
│   ├── constants
│   ├── fixtures
│   ├── graphql
│   ├── hooks
│   ├── mock
│   ├── pages
│   ├── posts
│   ├── recoil
│   ├── utils
│   ├── App.tsx
│   ├── index.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
├── index.html
├── Dockerfile
├── README.md
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tsconfig.json
└── vite.config.ts
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

<!-- todo : 버저닝을 readme 에 자동화 할 수 있나 ?  -->

## 📙 Versioning

[`0.0.21`](https://github.com/k1my3ch4n/dev-blog/pull/62)

- 리전 변경으로 인해 패키지 배포 주소가 변경되었습니다.

<details>
<summary>이전 버전 보기</summary>
<div markdown="1">

[`0.0.20`](https://github.com/k1my3ch4n/dev-blog/pull/61)

- 블로그 게시글 페이지의 마크다운에 디자인이 수정되었습니다.

[`0.0.19`](https://github.com/k1my3ch4n/dev-blog/pull/60) ~ [`0.0.14`](https://github.com/k1my3ch4n/dev-blog/pull/55)

- 배포된 blog 에 서버를 연결했습니다.

[`0.0.13`](https://github.com/k1my3ch4n/dev-blog/pull/54)

- blog 페이지의 ETC 파트를 추가했습니다.

[`0.0.12`](https://github.com/k1my3ch4n/dev-blog/pull/50)

- msw 설치 후 browser 및 server 연결 및 vitest 테스트 코드가 작성되었습니다 .

[`0.0.11`](https://github.com/k1my3ch4n/dev-blog/pull/49)

- blog docker 빌드 시 env 가 들어가지 않는 버그가 수정되었습니다.

[`0.0.10`](https://github.com/k1my3ch4n/dev-blog/pull/48)

- npm_auth_token 을 외부에서 주입하도록 설정했습니다 .

[`0.0.9`](https://github.com/k1my3ch4n/dev-blog/pull/47)

- blog / portfolio 배포 오류가 수정되었습니다.

[`0.0.8`](https://github.com/k1my3ch4n/dev-blog/pull/46)

- core 배포 설정 추가 및 blog / portfolio 패키지에 적용되었습니다.

[`0.0.7`](https://github.com/k1my3ch4n/dev-blog/pull/45)

- pageBox 컴포넌트가 수정되었습니다.

[`0.0.6`](https://github.com/k1my3ch4n/dev-blog/pull/44)

- 블로그 이동 및 블로그 상세 페이지에 api 가 적용되었습니다 .

[`0.0.5`](https://github.com/k1my3ch4n/dev-blog/pull/43)

- 블로그 패키지에 api 연결이 추가되었습니다.

[`0.0.4`](https://github.com/k1my3ch4n/dev-blog/pull/42)

- blog 에 apollo client 가 추가되었습니다.

[`0.0.3`](https://github.com/k1my3ch4n/dev-blog/pull/41)

- blog 패키지에 게시글이 추가되었습니다 - 우아한 테크코스

[`0.0.2`](https://github.com/k1my3ch4n/dev-blog/pull/40)

- Readme 가 업데이트 되었습니다.

[`0.0.1`](https://github.com/k1my3ch4n/dev-blog/pull/37)

- 블로그 버저닝이 추가되었습니다.

</div>
</details>

> # 경고 : !해당 프로젝트는 더이상 사용되지 않습니다.
> 변경된 [repo](https://github.com/k1my3ch4n/dev-next-blog) 를 확인해 주세요. 

<br>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />


# Monorepo 로 블로그 , 포트폴리오 구현 프로젝트

<div align="center">

<a href='https://blog-384003056882.asia-northeast1.run.app/' target="_blank">
   <img src='https://img.shields.io/badge/blog-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/blog/README.md' target="_blank">
   <img src='https://img.shields.io/badge/blog-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://portfolio-384003056882.asia-northeast1.run.app/' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/portfolio/README.md' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://www.npmjs.com/package/k1my3ch4n-core' target="_blank">
   <img src='https://img.shields.io/badge/core-npm-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/core/README.md' target="_blank">
    <img src='https://img.shields.io/badge/core-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://server-384003056882.asia-northeast1.run.app/graphql' target="_blank">
   <img src='https://img.shields.io/badge/server-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog-server/blob/main/README.md' target="_blank">
    <img src='https://img.shields.io/badge/server-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

</div>

Monorepo 를 사용해서 블로그와 포트폴리오를 구현하는 프로젝트입니다. 내부에 독립적인 블로그 / 포트폴리오 패키지가 존재하고 , 이 둘에서 공통으로 사용되는 컴포넌트 및 hook 을 모아둔 core 패키지가 존재합니다.

1. **노드 버전 (>= 20.0.0)**

   ```sh
   node --version
   ```

2. **yarn 버전 (4.4.1)**
   ```sh
   yarn --version
   ```

추가로 블로그 패키지에서 사용하는 서버는 모노레포 외부에 존재합니다. [참고](https://github.com/k1my3ch4n/dev-blog-server/blob/main/README)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔶 Technology Stack

- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://ko.vitejs.dev/guide/)
- [Yarn workspaces](https://yarnpkg.com/features/workspaces)
- [Yarn PnP](https://yarnpkg.com/features/pnp)
- [Github action](https://github.com/features/actions)
- [Google Cloud Platform](https://cloud.google.com/?hl=ko)
- [Docker](https://www.docker.com/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Recoil](https://recoiljs.org/)
- [Vitest](https://vitest.dev/)
- [Mock Service Worker](https://mswjs.io/)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
packages
├── core
│   ├── .storybook
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── index.ts
│   │   └── vite-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── blog
│   ├── src
│   │   ├── apis
│   │   ├── assets
│   │   ├── clients
│   │   ├── components
│   │   ├── constants
│   │   ├── fixtures
│   │   ├── graphql
│   │   ├── hooks
│   │   ├── mock
│   │   ├── pages
│   │   ├── posts
│   │   ├── recoil
│   │   ├── utils
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── router.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── Dockerfile
│   ├── README.md
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── portfolio
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── hooks
    │   ├── pages
    │   ├── projects
    │   ├── App.tsx
    │   ├── router.ts
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── index.html
    ├── Dockerfile
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── tsconfig.json
    └── vite.config.ts
```

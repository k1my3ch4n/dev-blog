# Monorepo 로 블로그 , 포트폴리오 구현 프로젝트

<div align="center">

<a href='https://monorepo-blog-384003056882.asia-northeast3.run.app/' target="_blank">
   <img src='https://img.shields.io/badge/blog-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/blog/README.md' target="_blank">
   <img src='https://img.shields.io/badge/blog-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://monorepo-portfolio-384003056882.asia-northeast3.run.app/' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/portfolio/README.md' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://github.com/k1my3ch4n/dev-blog/blob/main/packages/core/README.md' target="_blank">
    <img src='https://img.shields.io/badge/core-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
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
<!-- - [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Recoil](https://recoiljs.org/)
- [Jest](https://jestjs.io/) -->

<!-- [폰트 - paperlogy 체](https://noonnu.cc/font_page/1456) -->

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
│   │   ├── assets
│   │   ├── components
│   │   ├── constants
│   │   ├── hooks
│   │   ├── pages
│   │   ├── posts
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

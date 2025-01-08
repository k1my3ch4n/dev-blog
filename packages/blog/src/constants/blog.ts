import {
  YarnBerryPnp,
  GithubActions1,
  GithubActions2,
  GithubActions3,
  YarnWorkspaceMonorepo1,
  YarnWorkspaceMonorepo2,
  YarnWorkspaceMonorepo3,
  YarnWorkspaceMonorepo4,
  YarnWorkspaceMonorepo5,
  Msw1,
  Msw2,
  Msw3,
} from '@images/index';

export const BLOG_POST_DATA = [
  //   {
  //     thumbnail: '',
  //     title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
  //     tags: ['태그 1', '태그 2'],
  //     postId: '',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'msw ( mock service worker ) 를 이용한 API mocking #4 ( jest vs vitest )',
  //     tags: ['msw', 'mock service worker', 'monorepo'],
  //     postId: '',
  //   },
  // msw 4번은 보류
  {
    Thumbnail: Msw3,
    title: 'msw ( mock service worker ) 를 이용한 API mocking #3 ( storybook 작성 )',
    tags: ['msw', 'mock service worker', 'storybook'],
    postId: 'msw-3',
  },
  {
    Thumbnail: Msw2,
    title:
      'msw ( mock service worker ) 를 이용한 API mocking #2 ( jest 를 이용한 테스트 코드 작성 )',
    tags: ['msw', 'mock service worker', 'jest', 'react testing library', 'vitest'],
    postId: 'msw-2',
  },
  {
    Thumbnail: Msw1,
    title: 'msw ( mock service worker ) 를 이용한 API mocking #1 ( msw 기본 설정 )',
    tags: ['msw', 'mock service worker'],
    postId: 'msw-1',
  },
  {
    Thumbnail: YarnWorkspaceMonorepo5,
    title: 'yarn workspaces 로 monorepo구성하기 #5 ( github package publish )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'github package'],
    postId: 'yarn-workspace-monorepo-5',
  },
  {
    Thumbnail: YarnWorkspaceMonorepo4,
    title: 'yarn workspaces 로 monorepo구성하기 #4 ( npm publish )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'npm publish'],
    postId: 'yarn-workspace-monorepo-4',
  },
  {
    Thumbnail: YarnWorkspaceMonorepo3,
    title: 'yarn workspaces 로 monorepo구성하기 #3 ( 공통 파일 추가 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry'],
    postId: 'yarn-workspace-monorepo-3',
  },
  {
    Thumbnail: YarnWorkspaceMonorepo2,
    title: 'yarn workspaces 로 monorepo구성하기 #2 ( prettier , eslint 설정 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'eslint', 'prettier'],
    postId: 'yarn-workspace-monorepo-2',
  },
  {
    Thumbnail: YarnWorkspaceMonorepo1,
    title: 'yarn workspaces 로 monorepo구성하기 #1 ( monorepo 기본 설정 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry'],
    postId: 'yarn-workspace-monorepo-1',
  },
  {
    Thumbnail: GithubActions3,
    title: 'github actions를 이용한 ci/cd 자동화 #3 ( notion versioning , 패치노트 )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions', 'versioning', 'notion versioning'],
    postId: 'github-actions-3',
  },
  {
    Thumbnail: GithubActions2,
    title: 'github actions를 이용한 ci/cd 자동화 #2 ( semver , auto versioning )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions', 'versioning', 'auto versioning'],
    postId: 'github-actions-2',
  },
  {
    Thumbnail: GithubActions1,
    title: 'github actions를 이용한 ci/cd 자동화 #1 ( checkout , setup node , build )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions'],
    postId: 'github-actions-1',
  },
  {
    Thumbnail: YarnBerryPnp,
    title: 'yarn berry pnp 적용기',
    tags: ['pnp', 'vite', 'yarn berry'],
    postId: 'yarn-berry-pnp-1',
  },
];

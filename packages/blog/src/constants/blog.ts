// TODO : 이미지 import 수정해야함
import { ReactComponent as Layout } from '@images/layout.svg';
import { ReactComponent as GithubActions1 } from '@images/githubActions1.svg';
import { ReactComponent as GithubActions2 } from '@images/githubActions2.svg';
import { ReactComponent as GithubActions3 } from '@images/githubActions3.svg';
import { ReactComponent as YarnWorkspaceMonorepo1 } from '@images/yarnWorkspaceMonorepo1.svg';
import { ReactComponent as YarnWorkspaceMonorepo2 } from '@images/yarnWorkspaceMonorepo2.svg';
import { ReactComponent as YarnWorkspaceMonorepo3 } from '@images/yarnWorkspaceMonorepo3.svg';
import { ReactComponent as YarnWorkspaceMonorepo4 } from '@images/yarnWorkspaceMonorepo4.svg';
import { ReactComponent as YarnWorkspaceMonorepo5 } from '@images/yarnWorkspaceMonorepo5.svg';

export const BLOG_POST_DATA = [
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
    postId: '',
  },
  {
    thumbnail: YarnWorkspaceMonorepo5,
    title: 'yarn workspaces 로 monorepo구성하기 #5 ( github package publish )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'github package'],
    postId: 'yarn-workspace-monorepo-5',
  },
  {
    thumbnail: YarnWorkspaceMonorepo4,
    title: 'yarn workspaces 로 monorepo구성하기 #4 ( npm publish )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'npm publish'],
    postId: 'yarn-workspace-monorepo-4',
  },
  {
    thumbnail: YarnWorkspaceMonorepo3,
    title: 'yarn workspaces 로 monorepo구성하기 #3 ( 공통 파일 추가 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry'],
    postId: 'yarn-workspace-monorepo-3',
  },
  {
    thumbnail: YarnWorkspaceMonorepo2,
    title: 'yarn workspaces 로 monorepo구성하기 #2 ( prettier , eslint 설정 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry', 'eslint', 'prettier'],
    postId: 'yarn-workspace-monorepo-2',
  },
  {
    thumbnail: YarnWorkspaceMonorepo1,
    title: 'yarn workspaces 로 monorepo구성하기 #1 ( monorepo 기본 설정 )',
    tags: ['monorepo', 'vite', 'yarn workspace', 'yarn berry'],
    postId: 'yarn-workspace-monorepo-1',
  },
  {
    thumbnail: GithubActions3,
    title: 'github actions를 이용한 ci/cd 자동화 #3 ( notion versioning , 패치노트 )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions', 'versioning', 'notion versioning'],
    postId: 'github-actions-3',
  },
  {
    thumbnail: GithubActions2,
    title: 'github actions를 이용한 ci/cd 자동화 #2 ( semver , auto versioning )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions', 'versioning', 'auto versioning'],
    postId: 'github-actions-2',
  },
  {
    thumbnail: GithubActions1,
    title: 'github actions를 이용한 ci/cd 자동화 #1 ( checkout , setup node , build )',
    tags: ['ci/cd', 'pull request', 'github', 'github actions'],
    postId: 'github-actions-1',
  },
  {
    thumbnail: Layout,
    title: 'yarn berry pnp 적용기',
    tags: ['pnp', 'vite', 'yarn berry'],
    postId: 'yarn-berry-pnp-1',
  },
];

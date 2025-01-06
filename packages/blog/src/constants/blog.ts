import { ReactComponent as Layout } from '@images/layout.svg';
import { ReactComponent as GithubActions1 } from '@images/githubActions1.svg';
import { ReactComponent as GithubActions2 } from '@images/githubActions2.svg';
import { ReactComponent as GithubActions3 } from '@images/githubActions3.svg';

export const BLOG_POST_DATA = [
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
  },
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
  },
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
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

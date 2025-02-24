import { describe, test, expect } from 'vitest';
import { PostData } from '@recoil/postsAtom';
import { waitFor } from '@testing-library/react';
import useGetPosts, { adapter } from './useGetPosts';
import { renderTestHook } from '@utils/testUtil';

const renderUseGetPosts = () => {
  return renderTestHook({ hook: useGetPosts });
};

interface PostsResponseData {
  posts: PostData[];
}

const MOCK_DATA: PostsResponseData = {
  posts: [
    {
      id: 1,
      postKey: 'msw-1',
      title: 'title1',
      tags: ['tag1', 'tag2'],
    },
  ],
};

describe('useGetPosts 테스트', () => {
  describe('쿼리 요청 성공 시 ,', () => {
    test('postsData 를 반환한다.', async () => {
      const { result } = renderUseGetPosts();

      await waitFor(() => expect(result.current.postsData).toEqual(adapter(MOCK_DATA)));
    });
  });
});

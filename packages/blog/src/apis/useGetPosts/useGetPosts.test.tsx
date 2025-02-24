import { describe, test, expect, vi } from 'vitest';
import { PostData } from '@recoil/postsAtom';
import useGetPosts, { adapter } from './useGetPosts';
import { renderTestHook } from '@utils/testUtil';
import { graphqlMockError } from '@mock/server';
import { waitFor } from '@testing-library/react';

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

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => expect(result.current.postsData).toEqual(adapter(MOCK_DATA)));

      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('쿼리 요청 실패 시 ,', () => {
    test('isError 가 정의된다. ', async () => {
      graphqlMockError({
        operationName: 'GetPosts',
        operation: 'query',
      });

      const { result } = renderUseGetPosts();

      await waitFor(() => expect(result.current.isError).toBeDefined());
    });
  });
});

import { describe, test, expect } from 'vitest';
import useGetPosts, { adapter } from './useGetPosts';
import { renderTestHook } from '@utils/testUtil';
import { graphqlMockError } from '@mock/server';
import { waitFor } from '@testing-library/react';
import { MOCK_GET_POSTS_RESPONSE } from '@fixtures/posts';

const renderUseGetPosts = () => {
  return renderTestHook({ hook: () => useGetPosts({}) });
};

describe('useGetPosts 테스트', () => {
  describe('쿼리 요청 성공 시 ,', () => {
    test('postsData 를 반환한다.', async () => {
      const { result } = renderUseGetPosts();

      expect(result.current.isLoading).toBe(true);

      await waitFor(() =>
        expect(result.current.postsData).toEqual(adapter(MOCK_GET_POSTS_RESPONSE)),
      );

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

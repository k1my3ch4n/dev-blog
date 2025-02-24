import { renderTestHook } from '@utils/testUtil';
import useGetPostWithKey, { adapter } from './useGetPostWithKey';
import { describe, expect, test } from 'vitest';
import { waitFor } from '@testing-library/react';
import { graphqlMockError } from '@mock/server';

const renderUseGetPostWithKey = (postKey?: string) => {
  return renderTestHook({ hook: () => useGetPostWithKey(postKey) });
};

// todo : Mock data 정라
const MOCK_DATA = {
  post: {
    id: 1,
    postKey: 'msw-1',
    title: 'title1',
    tags: ['tag1', 'tag2'],
  },
};

describe('useGetPostWithKey 테스트', () => {
  describe('쿼리 요청 성공 시 ,', () => {
    test('postData 를 반환한다.', async () => {
      const { result } = renderUseGetPostWithKey('msw-1');

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => expect(result.current.postData).toEqual(adapter(MOCK_DATA)));

      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('쿼리 요청 실패 시 ,', () => {
    test('isError 가 정의된다. ', async () => {
      graphqlMockError({
        operationName: 'GetPostWithKey',
        operation: 'query',
      });

      const { result } = renderUseGetPostWithKey('msw-1');

      await waitFor(() => expect(result.current.isError).toBeDefined());
    });
  });
});

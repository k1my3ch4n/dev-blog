import { describe, test, expect } from 'vitest';
import { PostData } from '@src/recoil/postsAtom';
import useGetPosts, { adapter } from './useGetPosts';
import { renderHook, waitFor } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot, RecoilValue, Snapshot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import client from '@clients/client.ts';

type SnapshotRef = {
  current?: {
    snapshot: Snapshot;
    get: (state: RecoilValue<any>) => any;
  };
};

const renderTestHook = <T,>({
  hook,
  initializeRecoilState,
}: {
  hook: (props: any) => T;
  snapshotRef?: SnapshotRef;
  initializeRecoilState?: (mutableSnapshot: MutableSnapshot) => void;
}) => {
  const wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <RecoilRoot initializeState={initializeRecoilState}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </RecoilRoot>
    );
  };

  return renderHook(hook, { wrapper });
};

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

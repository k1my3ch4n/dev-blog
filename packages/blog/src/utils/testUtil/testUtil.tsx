import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { renderHook } from '@testing-library/react';
import client from '@clients/client';

export const renderTestHook = <T,>({
  hook,
  initializeRecoilState,
}: {
  hook: (props: any) => T;
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

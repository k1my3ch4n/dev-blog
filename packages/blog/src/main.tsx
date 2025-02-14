import '@styles/global.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import client from '@clients/client.ts';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  </ApolloProvider>,
);

import { setupWorker } from 'msw/browser';
import graphqlHandlers from './handlers';

export const worker = setupWorker(...graphqlHandlers);

import { PostData } from '@fixtures/posts';
import { atom } from 'recoil';

const postsAtom = atom<PostData[]>({
  key: 'postAtom',
  default: [],
});

export default postsAtom;

import { atom } from 'recoil';

export interface PostData {
  id: number;
  postKey: string;
  title: string;
  tags: string[];
}

const postsAtom = atom<PostData[]>({
  key: 'postAtom',
  default: [],
});

export default postsAtom;

import { atom } from 'recoil';

export interface PostType {
  id: string;
  title: string;
  description: string;
  createDate: string;
  lastChangeDate: string;
  thumbnail: string;
  file: string;
}

const postsAtom = atom<PostType[] | undefined>({
  key: 'postsAtom',
  default: undefined,
});

export default postsAtom;

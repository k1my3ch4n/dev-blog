import { atom } from 'recoil';

export interface TagType {
  id: string;
  tag: string;
}

const tagsAtom = atom<TagType[] | undefined>({
  key: 'tagsAtom',
  default: undefined,
});

export default tagsAtom;

import { useQuery } from '@apollo/client';
import { GetTagsDocument } from '@src/graphql/tags/tags';
import tagsAtom, { TagType } from '@src/recoil/blog/tag';
import { useEffect, useMemo } from 'react';

import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useGetTagsQuery = () => {
  const setTags = useSetRecoilState(tagsAtom);
  const resetTags = useResetRecoilState(tagsAtom);

  const { data, loading: isLoading } = useQuery<TagType[]>(GetTagsDocument, {
    onError: (error) => {
      console.error(error);
    },
  });

  const tagData = useMemo(() => data, [data]);

  useEffect(() => {
    if (tagData) {
      setTags(tagData);
    }
  }, [tagData, setTags]);

  useEffect(() => {
    return () => {
      resetTags();
    };
  }, [resetTags]);

  return {
    tagData,
    isLoading,
  };
};

export default useGetTagsQuery;

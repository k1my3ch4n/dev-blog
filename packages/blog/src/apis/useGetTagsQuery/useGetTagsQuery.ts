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

  const tagsData = useMemo(() => data, [data]);

  useEffect(() => {
    if (tagsData) {
      setTags(tagsData);
    }
  }, [tagsData, setTags]);

  useEffect(() => {
    return () => {
      resetTags();
    };
  }, [resetTags]);

  return {
    tagsData,
    isLoading,
  };
};

export default useGetTagsQuery;

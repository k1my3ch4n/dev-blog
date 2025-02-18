import { useQuery } from '@apollo/client';
import { GET_POST_WITH_KEY } from '@graphql/post';
import { PostData } from '@recoil/postsAtom';
import { useState } from 'react';

interface PostResponseData {
  post: PostData;
}

const adapter = (data?: PostResponseData) => {
  if (!data) {
    return;
  }

  return data.post;
};

const useGetPostWithKey = (postKey?: string) => {
  const [postData, setPostData] = useState<PostData | undefined>(undefined);

  const { loading: isLoading, error: isError } = useQuery<PostResponseData>(GET_POST_WITH_KEY, {
    variables: { postKey },
    onCompleted: (data) => setPostData(adapter(data)),
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    isLoading,
    isError,
    postData,
  };
};

export default useGetPostWithKey;

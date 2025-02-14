import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/post';
import { useEffect, useMemo, useState } from 'react';

interface PostData {
  id: string;
  postKey: string;
  title: string;
  tags: string[];
}

interface PostsData {
  posts: PostData[];
}

const adapter = (data?: PostsData) => {
  if (!data) {
    return;
  }

  return data.posts;
};

const useGetPosts = () => {
  const [postsData, setPostsData] = useState<PostData[]>([]);

  const { data } = useQuery(GET_POSTS, {
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(data?.posts);

  const postsMemoData = useMemo(() => adapter(data), [data]);

  useEffect(() => {
    if (postsMemoData) {
      setPostsData(postsMemoData);
    }
  }, [postsMemoData, setPostsData]);

  return {
    postsData,
  };
};

export default useGetPosts;

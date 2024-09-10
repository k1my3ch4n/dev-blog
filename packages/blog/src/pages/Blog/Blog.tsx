import useGetTagsQuery from '@src/apis/useGetTagsQuery';

const Blog = () => {
  const { data } = useGetTagsQuery();

  console.log(data);

  return <div>Blog</div>;
};

export default Blog;

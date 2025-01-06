import MarkdownWrapper from '@src/components/MarkdownWrapper';
import useGetMarkdown from '@src/hooks/useGetMarkdown';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  return <MarkdownWrapper markdown={markdown} />;
};

export default BlogPost;

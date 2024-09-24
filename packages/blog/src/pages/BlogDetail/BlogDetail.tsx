import useGetMarkdown from '@src/hooks/useGetMarkdown';
import { useParams } from 'react-router-dom';
import MarkdownWrapper from '@src/components/MarkdownWrapper';

const BlogDetail = () => {
  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  return <MarkdownWrapper markdown={markdown} />;
};

export default BlogDetail;

import useGetMarkdown from '@src/hooks/useGetMarkdown';
import { useParams } from 'react-router-dom';
import MarkdownToJSX from 'markdown-to-jsx';

const BlogDetail = () => {
  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  console.log(postId);

  return (
    <div>
      <MarkdownToJSX
        options={{
          wrapper: 'article',
        }}
      >
        {markdown}
      </MarkdownToJSX>
    </div>
  );
};

export default BlogDetail;

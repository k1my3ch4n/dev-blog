import styles from './MarkdownWrapper.module.scss';
import MarkdownToJSX from 'markdown-to-jsx';

const MarkdownWrapper = ({ markdown }: { markdown: string }) => {
  const H2Component = ({ children }) => {
    return <div className={styles.h2}>{children}</div>;
  };

  return (
    <MarkdownToJSX
      options={{
        // wrapper: 'article',
        // forceBlock: true,
        overrides: {
          h2: H2Component,
        },
      }}
    >
      {markdown}
    </MarkdownToJSX>
  );
};

export default MarkdownWrapper;

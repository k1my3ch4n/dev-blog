import styles from './MarkdownWrapper.module.scss';
import MarkdownToJSX from 'markdown-to-jsx';

const MarkdownWrapper = ({ markdown }: { markdown: string }) => {
  const PreComponent = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    return <pre className={styles.pre}>{props.children}</pre>;
  };

  const CodeComponent = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const preLanguage = props.className?.slice(5);

    return (
      <>
        {preLanguage && <p className={styles.preLanguage}>{preLanguage}</p>}
        <code className={`${styles.pre} ${props.className}`}>{props.children}</code>
      </>
    );
  };

  const LiComponent = ({ ...props }: React.LiHTMLAttributes<HTMLLIElement>) => {
    return <li> - {props.children}</li>;
  };

  return (
    <div className={styles.wrapper}>
      <MarkdownToJSX
        options={{
          overrides: {
            pre: PreComponent,
            code: CodeComponent,
            li: LiComponent,
          },
        }}
      >
        {markdown}
      </MarkdownToJSX>
    </div>
  );
};

export default MarkdownWrapper;

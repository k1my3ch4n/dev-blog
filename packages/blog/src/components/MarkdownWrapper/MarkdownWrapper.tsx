import styles from './MarkdownWrapper.module.scss';
import MarkdownToJSX from 'markdown-to-jsx';

/*
  todo : 작업해야할 태그

  - pre ( 긴 코드 )
  - code ( 짧은 코드 )
  - ul 
  - li 
  - ol
*/

const MarkdownWrapper = ({ markdown }: { markdown: string }) => {
  // const H2Component = ({ children }) => {
  //   return <h2 className={styles.h2}>{children}</h2>;
  // };

  return (
    <div className={styles.wrapper}>
      <MarkdownToJSX
        options={
          {
            // overrides: {
            //   h2: H2Component,
            // },
          }
        }
      >
        {markdown}
      </MarkdownToJSX>
    </div>
  );
};

export default MarkdownWrapper;

import { Divider, PageBox, Title } from 'k1my3ch4n-core/components';
import styles from './Extra.module.scss';
import { Github, MainLogo } from '@images';

const Extra = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Title title="ETC" />
      <Divider />
      <div className={styles.wrapper}>
        <PageBox
          Thumbnail={Github}
          title="Github"
          onClick={() => handleClick('https://github.com/k1my3ch4n')}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleClick('https://monorepo-blog-384003056882.asia-northeast3.run.app/')}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Extra;

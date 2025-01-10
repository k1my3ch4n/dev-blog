import styles from './Projects.module.scss';
import { Divider, PageBox, Title } from '@monorepo/core/components';
import { MainLogo } from '@images';

const Projects = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <Title title="개인 프로젝트" />
      <Divider />
      <PageBox
        Thumbnail={MainLogo}
        title="Monorepo로 블로그 및 포트폴리오 페이지 생성"
        onClick={() => handleClick('https://github.com/k1my3ch4n/dev-blog/blob/main/README.md')}
        width="400px"
        height="300px"
      />
    </div>
  );
};

export default Projects;

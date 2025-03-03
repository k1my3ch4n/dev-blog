import styles from './AboutMe.module.scss';
import { Divider, Header, PageBox } from 'k1my3ch4n-core/components';
import { MainLogo, Github } from '@images';

const GITHUB_LINK = 'https://github.com/k1my3ch4n';
const BLOG_LINK = 'https://blog.k1my3ch4n.xyz/';

const AboutMe = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Header>💫 About Me</Header>
      <Divider />
      <div className={styles.wrapper}>
        <PageBox
          Thumbnail={Github}
          title="Github"
          onClick={() => handleClick(GITHUB_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleClick(BLOG_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default AboutMe;

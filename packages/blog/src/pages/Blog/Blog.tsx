import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Divider, Header, Text, Title } from '@monorepo/core/components';

const Blog = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />

      <div className={styles.post}>
        <div className={styles.thumbnail}></div>
        <div>
          <Header size="m">테스트용 타이틀</Header>
          <Text>테스트용 미리보기</Text>
        </div>
      </div>
    </>
  );
};

export default Blog;

import { Title } from 'k1my3ch4n-core/components';
import Introduce from './Introduce';
import Projects from './Projects';
import Blog from './Blog';
import useGetPosts from '@apis/useGetPosts';

const Main = () => {
  useGetPosts();

  return (
    <>
      <Introduce />
      <Projects />
      <Blog />

      <Title title="ETC" />
    </>
  );
};

export default Main;

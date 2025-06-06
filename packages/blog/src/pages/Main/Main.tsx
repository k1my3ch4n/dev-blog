import Introduce from './Introduce';
import Projects from './Projects';
import Blog from './Blog';
import Extra from './Extra';
import useGetPosts from '@apis/useGetPosts';

const Main = () => {
  useGetPosts({});

  return (
    <>
      <Introduce />
      <Projects />
      <Blog />
      <Extra />
    </>
  );
};

export default Main;

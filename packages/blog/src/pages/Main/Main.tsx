import { Title } from '@monorepo/core/components';
import Introduce from './Introduce';
import Projects from './Projects';
import Blog from './Blog';

const Main = () => {
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

import { useParams } from 'react-router-dom';

import UserRobot from '@projects/UserRobot';
import ManagerRobot from '@projects/ManagerRobot';

import HomeButton from '@components/HomeButton';
import { ScrollToTopButton } from 'k1my3ch4n-core/components';

const PROJECT_MAP: { [key: string]: JSX.Element } = {
  managerRobot: <ManagerRobot />,
  userRobot: <UserRobot />,
};

const Project = () => {
  const { projectName } = useParams();

  const SelectedProject = projectName ? PROJECT_MAP[projectName] : <div>error</div>;

  return (
    <>
      <HomeButton />
      {SelectedProject}
      <ScrollToTopButton />
    </>
  );
};

export default Project;

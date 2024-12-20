import ManagerRobot from '@projects/ManagerRobot';
import UserRobot from '@projects/UserRobot';
import HomeButton from '@components/HomeButton';
import { useParams } from 'react-router-dom';

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
    </>
  );
};

export default Project;

import ManagerRobot from '@src/projects/ManagerRobot';
import UserRobot from '@src/projects/UserRobot';
import { useParams } from 'react-router-dom';

const PROJECT_MAP: { [key: string]: JSX.Element } = {
  managerRobot: <ManagerRobot />,
  userRobot: <UserRobot />,
};

const Project = () => {
  const { projectName } = useParams();

  const SelectedProject = projectName ? PROJECT_MAP[projectName] : <div>error</div>;

  return <div>{SelectedProject}</div>;
};

export default Project;

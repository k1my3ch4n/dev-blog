import { useNavigate } from 'react-router-dom';
import styles from './HomeButton.module.scss';

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      🏠
    </button>
  );
};

export default HomeButton;

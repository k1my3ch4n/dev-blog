import styles from './ScrollToTopButton.module.scss';

import { useScrollToTop } from '@monorepo/core/hooks';

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <button className={styles.button} onClick={scrollToTop}>
          맨 위로
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

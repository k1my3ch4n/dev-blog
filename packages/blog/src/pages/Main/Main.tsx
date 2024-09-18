import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* todo : 이미지 수정 예정 */}
      <div className={styles.mainImage}></div>
      <div className={styles.introduce}>
        <div className={`${styles.item} ${styles.lhs}`}>
          <p>질문하는 프론트엔드 개발자 입니다 .</p>
          <p>질문하고 경험한 것들을 기록하고 공유합니다 .</p>
          <p>가나다라마바사가나다라마바사</p>
          <p>가나다라마바사가나다라마바사</p>
        </div>
        <div className={`${styles.item} ${styles.rhs}`}>
          <p>K1MY3CH4N</p>
          <p>김예찬</p>
        </div>
      </div>
      <div className={styles.introduceMore}>
        저에 대해 더 자세하게 알고 싶으신가요 ? 클릭 ! {'>'}
      </div>
      <div className={styles.projects}>
        {/* 좌측 스크롤 */}
        <div>card</div>
      </div>
      <div>etc</div>
    </div>
  );
};

export default Main;

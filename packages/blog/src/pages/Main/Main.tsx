import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* todo : 이미지 수정 예정 */}
      <div className={styles.mainImage}></div>
      <div className={styles.introduce}>
        <div className={styles.lhs}>
          <p>질문하는 FE 개발자 입니다 .</p>
          <p>질문하고 경험한 것들을 기록합니다 .</p>
        </div>
        <div className={styles.rhs}>
          <p>K1MY3CH4N</p>
          <p>김예찬</p>
        </div>
      </div>
      <div className={styles.projects}>프로젝트</div>
      <div>etc</div>
    </div>
  );
};

export default Main;

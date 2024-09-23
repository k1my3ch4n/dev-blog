import styles from './Main.module.scss';
import MainLogo from '@images/main_logo.svg?react';
import { MAIN_POSTS } from '@src/constants/posts';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* todo : 이미지 수정 예정 */}
      <div className={styles.mainImage}></div>
      <div className={styles.introduce}>
        <div className={`${styles.item} ${styles.lhs}`}>
          <p>질문하는 프론트엔드 개발자 입니다 .</p>
          <p>질문하고 경험한 것들을 기록하고 공유합니다 .</p>
          <p>( 해당 블로그는 현재 개발 진행중입니다. )</p>
        </div>
        <div className={`${styles.item} ${styles.rhs}`}>
          <p>K1MY3CH4N</p>
          <p>김예찬</p>
        </div>
      </div>
      <div className={styles.introduceMore}>저에 대해 더 자세하게 알고 싶으신가요 ? 클릭 !</div>
      <div className={styles.title}>프로젝트</div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <MainLogo style={{ width: '500px', height: '150px' }} />
          <p>이 블로그는 어떻게 만들어졌을까요 ?</p>
        </div>
      </div>
      <div className={styles.title}>Blog</div>
      <div className={styles.posts}>
        {MAIN_POSTS.map((data) => {
          const { id, title, tags, thumbnail } = data;

          const handleClick = () => {
            navigate(`/blog/${id}`);
          };

          return (
            <div className={styles.post} onClick={handleClick}>
              <img className={styles.thumbnail} src={thumbnail} alt="" />
              <p>{title}</p>
              <div className={styles.tagWrapper}>
                {tags.map((tag) => {
                  return <div className={styles.tag}>{tag}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.title}>ETC</div>
    </div>
  );
};

export default Main;

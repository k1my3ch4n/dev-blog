import styles from './App.module.scss';
import Header from './components/Header';
import Text from './components/Text';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다.</div>
      <div className={styles.content}>
        <Header title="🙎‍♂️ Who Am I ?" />
        <div className={styles.whoAmI}>
          {/* lhs */}
          <div>
            <div>img</div>
            <Text text="🔥 김예찬" />
            <Text text="✉️ k1my3ch4n@gmail.com" />
            <Text text="📱 010-2695-7092" />
            <Text text="🏠 경기 성남시 분당구" />
          </div>
          {/* rhs */}
          <div>
            <div>메인</div>
            {/* 글머리 */}
            <div> - 글머리 1</div>
            <div> - 글머리 2</div>
            <div> - 글머리 3</div>
          </div>
        </div>

        <Header title="🔎 Profile" />
        <Header title="⚒️ Skills" />
        <Header title="👩🏻‍💻 Projects" />
        <Header title="💫 About Me" />
      </div>
      {/* Profile */}
      <div>
        {/* 경력 */}
        <div>
          {/* lhs */}
          <div></div>
          {/* rhs */}
          <div></div>
        </div>
        {/* 학력 */}
        <div></div>
      </div>
      {/* Skills */}
      <div>표</div>
      {/* Projects */}
      <div>
        <div>page1 - 블로그</div>
        <div>page2 - 오더피킹</div>
        <div>page3 - 토탈피킹</div>
      </div>
      {/* About Me */}
      <div></div>
      {/* <div>How I Work</div> */}
    </div>
  );
};

export default App;

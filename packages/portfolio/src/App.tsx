import styles from './App.module.scss';
import Header from './components/Header';
import List from './components/List';
import Text from './components/Text';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다.</div>
      <div className={styles.content}>
        <Header>🙎‍♂️ Who Am I ?</Header>
        <div className={styles.whoAmI}>
          {/* lhs */}
          <div>
            <div>img</div>
            <Text>🔥 김예찬</Text>
            <Text>✉️ k1my3ch4n@gmail.com</Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
          </div>
          {/* rhs */}
          <div>
            <Text>
              2년차 웹 프론트엔드 개발자로 자율주행 로봇 스타트업에서 유저 및 관리자가 로봇을 제어할
              수 있도록 관제하는 웹 프로덕트를 개발 및 서비스하면서 커리어를 시작했습니다.
            </Text>
            <List>
              개발 환경 개선에 관심이 많습니다. 배포 및 버저닝을 자동화하고, 빌드 시간 단축 등 자원
              소모를 줄인 경험을 가지고 있고 , 이로써 개발에 집중할 수 있는 환경을 만드는데 관심이
              많습니다 .
            </List>
            <List>
              효율적이고 생산성 있는 협업을 위해서 노력합니다. 서버팀과의 협업을 위해서 msw 를
              도입해 API 관련 논의를 진행하거나 , 디자인팀과 논의를 위해 스토리북을 도입하는 등의
              효율적이고 생산성 있는 협업을 한 경험을 가지고 있습니다.
            </List>
            <List>
              더 나은 제품을 위해 끊임없이 많은 질문을 합니다. 만약 필요하다면 새로운 기술이나
              도구를 도입하는데 적극적이고 , 변화를 두려워하지 않습니다.
            </List>
          </div>
        </div>

        <Header>🔎 Profile</Header>
        <div className={styles.profile}>
          <Header size="s">경력 (총 2년)</Header>
          <div>
            {/* lhs */}
            <div>
              <div>img</div>
              <Text>TWINNY</Text>
              <Text>2022.4 - 2024.4</Text>
            </div>
            {/* rhs */}
            <div></div>
          </div>
        </div>
        <Header>⚒️ Skills</Header>
        <Header>👩🏻‍💻 Projects</Header>
        <Header>💫 About Me</Header>
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

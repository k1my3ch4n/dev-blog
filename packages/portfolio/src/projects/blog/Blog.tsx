import { Bold, Header, Highlight, List, Text, Title } from '@monorepo/core/components';
import { MainLogo } from '@images';

const Blog = () => {
  return (
    <>
      <Title title="📖 Monorepo로 블로그 및 포트폴리오 페이지 생성" />
      <MainLogo width="100%" height="auto" />
      <Header size="s">기간</Header>
      <Text>
        <Highlight>2024.12 ~ 2025.02</Highlight>
      </Text>

      <Header size="m">작업 및 성과</Header>
      <List>
        <Bold>Monorepo 구성</Bold>
      </List>

      <Header size="s">관련 홈페이지 및 자료</Header>
      <List>관련 홈페이지</List>
      <List>관련 유튜브</List>
    </>
  );
};

export default Blog;

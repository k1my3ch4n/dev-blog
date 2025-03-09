import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import {
  Divider,
  Header,
  Highlight,
  Title,
  ImageBox,
  HomeButton,
  ScrollToTopButton,
} from 'k1my3ch4n-core/components';
import { BLOG_THUMBNAIL } from '@constants/blog';
import useGetPosts from '@apis/useGetPosts';
import useGetTags from '@src/apis/useGetTags';
import { useState } from 'react';

const Blog = () => {
  const navigate = useNavigate();
  const { data: tagsData } = useGetTags();

  // todo : 해당 부분 hook 으로 분리
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleSelected = (tag: string) => {
    if (!selectedTag || selectedTag !== tag) {
      setSelectedTag(tag);
      return;
    }

    setSelectedTag('');
  };

  // todo : 페이지네이션 추가
  const {
    isLoading: isGetPostsLoading,
    isError: isGetPostsError,
    postsData,
  } = useGetPosts(selectedTag);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <HomeButton onClick={handleClick} />
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />

      <div className={styles.tagWrapper}>
        {tagsData.map((tag) => {
          return (
            <div className={styles.mainTags} onClick={() => handleSelected(tag)}>
              {/* todo : 컴포넌트 변경 */}
              <Highlight key={tag}>{tag}</Highlight>
            </div>
          );
        })}
      </div>

      <Divider />

      {/* todo : loading, error 컴포넌트 만들기 */}
      {isGetPostsLoading && <div>로딩중입니다 ... </div>}
      {isGetPostsError && <div>에러가 발생했습니다 . </div>}

      {postsData?.map(
        ({ title, tags, postKey }: { title: string; tags: string[]; postKey: string }, index) => {
          const handleClick = (projectName: string) => {
            navigate(`/blog/${projectName}`);
            window.scrollTo(0, 0);
          };

          return (
            <div className={styles.post} key={index} onClick={() => handleClick(postKey)}>
              <ImageBox
                wrapperClassName={styles.imageWrapper}
                imageClassName={styles.image}
                Image={BLOG_THUMBNAIL[postKey]}
                width="200px"
                height="150px"
              />
              <div className={styles.title}>
                <Header size="m">{title}</Header>
                <div className={styles.tags}>
                  {/* todo : 타입 설정 */}
                  {tags?.map((tag: string) => <Highlight key={tag}>{tag}</Highlight>)}
                </div>
              </div>
            </div>
          );
        },
      )}

      <ScrollToTopButton />
    </>
  );
};

export default Blog;

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
import useGetTags from '@apis/useGetTags';
import useSelectedTag from '@hooks/useSelectedTag';
import Tag from '@components/Tag';

const Blog = () => {
  const navigate = useNavigate();
  const { tagsData } = useGetTags();

  const { selectedTag, handleSelected } = useSelectedTag();

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
          const isSelected = tag === selectedTag;

          return (
            <Tag key={tag} tag={tag} isSelected={isSelected} onClick={() => handleSelected(tag)} />
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

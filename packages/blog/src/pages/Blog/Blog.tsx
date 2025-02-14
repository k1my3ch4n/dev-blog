import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Divider, Header, Highlight, Title, ImageBox } from '@monorepo/core/components';
import { BLOG_THUMBNAIL } from '@constants/blog';
import useGetPosts from '@apis/useGetPosts';

const Blog = () => {
  const navigate = useNavigate();

  // todo : loading , error 페이지 추가 예정
  const { isLoading, isError, postsData } = useGetPosts();

  if (isLoading) {
    return <div>로딩중입니다 ... </div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다 . </div>;
  }

  return (
    <>
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />

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
    </>
  );
};

export default Blog;

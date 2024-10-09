import styles from './Tag.module.scss';

const Tag = ({
  tag,
  className,
  onClick,
}: {
  tag?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} onClick={onClick}>
      {tag}
    </div>
  );
};

export default Tag;

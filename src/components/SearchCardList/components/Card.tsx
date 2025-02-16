import { tm } from '@/utils/tw-merge';
import { ColorMoodItem } from '../types';
import generateGradient from '@/utils/generate-gradient';

interface CardProps {
  item: ColorMoodItem;
}

function Card({ item }: CardProps) {
  if (!item) return null;

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(slug);
  };

  const slug = `/color-mood/${item.id}`;
  const gradientBackground = generateGradient(item.id);

  return (
    <li
      className={tm('rounded-md my-2 p-4')}
      style={{ background: gradientBackground }}
    >
      <a href={slug} onClick={handleLink}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </a>
    </li>
  );
}

export default Card;

import { tm } from '@/utils/tw-merge';
import { boxStyle } from './SearchForm';
import { type ColorMoodItem } from '../types';
import Card from './Card';

// CardList 컴포넌트의 props 타입 정의
interface CardListProps {
  query: string;
  items: ColorMoodItem[];
}

function CardList({ items = [], query = '' }: CardListProps) {
  // 검색어가 소문자로 변환 및 불필요한 공백 제거
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  // 검색어가 포함된 아이템만 필터링
  const filteredList = items.filter((item) =>
    words.every(
      (word) =>
        item.title.toLowerCase().includes(word) ||
        item.description.toLowerCase().includes(word) ||
        (Array.isArray(item.tags) &&
          item.tags.some((tag) => tag.toLowerCase().includes(word)))
    )
  );

  const isEmpty = filteredList.length === 0;

  return (
    <section className="relative w-full">
      <h3 className="sr-only">검색된 리스트</h3>

      {/* 검색 결과가 없을 경우 메시지 표시 */}
      {isEmpty && query !== '' && (
        <p className="text-xl text-slate-700 font-semibold text-center">
          &quot;{query}&quot; 검색된 정보가 없습니다. 🥲
        </p>
      )}

      {/* 검색 결과가 있을 경우 리스트 출력 */}
      {!isEmpty && (
        <ul className={tm(boxStyle)}>
          {filteredList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CardList;

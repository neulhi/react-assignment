import { tm } from '@/utils/tw-merge';
import { useId, useState } from 'react';
import CardList from './CardList';
import cardDataList from '../../data/cardData';

// 공통 border 스타일
export const boxStyle = 'bg-gray-300 rounded-md my-2 p-4';

function SearchForm() {
  const searchInputId = useId();
  const [query, setQuery] = useState<string>('');

  // 검색어 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // 검색어 상태 업데이트
  };

  return (
    <div
      className={tm(
        'flex flex-wrap flex-col bg-gray-500 rounded-md',
        'w-full max-w-4xl h-auto p-4',
        // 'translate-x-[5%] translate-y-[50%]',
        'my-0 mx-auto'
      )}
    >
      <form>
        <label htmlFor={searchInputId} className="sr-only">
          카드 검색
        </label>
        <div className="flex flex-col justify-center">
          <div className={tm('flex items-center justify-between gap-2')}>
            <label htmlFor={searchInputId} className="sr-only">
              카드 검색
            </label>
            <input
              type="search"
              id={searchInputId}
              placeholder="검색어를 입력하세요"
              value={query}
              onChange={handleInputChange}
              className={tm(boxStyle, 'w-[89.7%]')}
            />
            <button
              type="submit"
              className={tm(
                'bg-gray-700 text-white p-4 rounded-md',
                'flex shrink-0'
              )}
            >
              검색
            </button>
          </div>
          <div className="flex gap-4">
            <button type="button" className={tm(boxStyle, 'shrink-0')}>
              태그1
            </button>
            <button type="button" className={tm(boxStyle, 'shrink-0')}>
              태그2
            </button>
            <button type="button" className={tm(boxStyle, 'shrink-0')}>
              태그3
            </button>
            <button type="button" className={tm(boxStyle, 'shrink-0')}>
              태그4
            </button>
          </div>
        </div>
      </form>
      <CardList query={query} items={cardDataList} />
    </div>
  );
}

export default SearchForm;

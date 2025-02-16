import { tm } from '@/utils/tw-merge';
import { useEffect, useId, useState } from 'react';
import debounce from 'lodash-es/debounce';
import { getQueryParam, setQueryParam } from '@/utils/query-param';
import CardList from './CardList';
import cardDataList from '../../data/cardData';

// 공통 border 스타일
export const boxStyle = 'bg-gray-300 rounded-md my-2 p-4';

function SearchForm() {
  const searchInputId = useId();
  const [query, setQuery] = useState<string>(getQueryParam() ?? ''); // URL에서 초기 검색어 가져오기

  // 검색어 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // lodash 디바운스 사용
  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      setQueryParam(query);
    }, 300);

    debouncedUpdate(); // 디바운스된 함수 실행

    return () => {
      debouncedUpdate.cancel(); // 클린업 함수로 디바운스 취소
    };
  }, [query]);

  // "검색" 버튼 클릭 시 URL 업데이트 및 필터링 적용
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueryParam(query); // URL 업데이트
  };

  // 태그 클릭 시 해당 태그로 검색 실행
  const handleTagClick = (tag: string) => {
    setQuery(tag);
    setQueryParam(tag);
  };

  // 뒤로 가기/앞으로 가기 시 URL 변화 감지하여 상태 업데이트
  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryParam() ?? '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div
      className={tm(
        'flex flex-wrap flex-col bg-gray-500 rounded-md w-full max-w-4xl h-auto p-4 my-0 mx-auto'
      )}
    >
      <form onSubmit={handleSearch}>
        <label htmlFor={searchInputId} className="sr-only">
          카드 검색
        </label>
        <div className="flex flex-col justify-center">
          <div className={tm('flex items-center justify-between gap-2')}>
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
                'bg-gray-700 text-white p-4 rounded-md flex shrink-0'
              )}
            >
              검색
            </button>
          </div>
          {/* 태그 버튼 (클릭하면 해당 태그가 검색어가 됨) */}
          <div className="flex gap-4">
            {['빨간색', '파란색', '초록색', '노란색'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={tm(boxStyle, 'shrink-0')}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </form>
      {/* 필터링된 카드 리스트 렌더링 */}
      <CardList query={query} items={cardDataList} />
    </div>
  );
}

export default SearchForm;

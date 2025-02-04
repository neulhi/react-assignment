import { tm } from '@/utils/tw-merge';

interface CounterButtonProps {
  count: number;
  setCount: (newCount: number) => void;
  maxCount: number;
}

function CounterButton({ count, setCount, maxCount }: CounterButtonProps) {
  return (
    <div
      className={tm(
        'flex items-center gap-2 h-auto self-start',
        'border border-gray-300 bg-gray-200 w-30 rounded-full'
      )}
    >
      <button
        type="button"
        className={tm(
          'px-4 py-2',
          count === 0 && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        disabled={count === 0}
      >
        -
      </button>
      <span className={tm('text-lg font-bold')}>{count}</span>
      <button
        type="button"
        className={tm(
          'px-4 py-2',
          count >= maxCount && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => setCount(count < maxCount ? count + 1 : maxCount)}
        disabled={count >= maxCount}
      >
        +
      </button>
    </div>
  );
}

export default CounterButton;

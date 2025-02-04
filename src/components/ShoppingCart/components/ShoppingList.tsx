import { tm } from '@/utils/tw-merge';
import CounterButton from './Button';

interface ShoppingItemType {
  id: string;
  img: string;
  alt: string;
  content: string;
  price: string;
  maxCount: number;
}

type CartType = Record<string, number>;

interface ShoppingListProps {
  cart: CartType;
  setCart: (update: (prev: CartType) => CartType) => void;
}

const shoppingItem: ShoppingItemType[] = [
  {
    id: 'item-1',
    img: '/ShoppingCart/ProductImage01.png',
    alt: '1A 우유 900mL',
    content: '1A 우유 900mL',
    price: '1,880원',
    maxCount: 3,
  },
  {
    id: 'item-2',
    img: '/ShoppingCart/ProductImage02.png',
    alt: '맛있는 콩나물 500g',
    content: '맛있는 콩나물 500g',
    price: '1,280원',
    maxCount: 3,
  },
  {
    id: 'item-3',
    img: '/ShoppingCart/ProductImage03.png',
    alt: '고소한 두부 1kg',
    content: '고소한 두부 1kg',
    price: '2,280원',
    maxCount: 2,
  },
];

function ShoppingList({ cart, setCart }: ShoppingListProps) {
  return (
    <div className={tm('border-t-2 border-b-2 py-8')}>
      {shoppingItem.map((list) => (
        <article
          key={list.id}
          className={tm('flex items-center py-8 w-full gap-5')}
        >
          <div>
            <img src={list.img} alt={list.alt} />
          </div>
          <div className={tm('flex items-center justify-between w-full')}>
            <div className={tm('flex flex-col gap-3.5')}>
              <p className={tm('text-4xl text-gray-700 line-clamp-1')}>
                {list.content}
              </p>
              <p className={tm('text-3xl text-gray-700 font-bold')}>
                {list.price}
              </p>
            </div>
            <CounterButton
              count={cart[list.id] ?? 0}
              setCount={(newCount: number) =>
                setCart((prev) => ({ ...prev, [list.id]: newCount }))
              }
              maxCount={list.maxCount}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export default ShoppingList;

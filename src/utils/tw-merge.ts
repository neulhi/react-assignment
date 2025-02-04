import clsx, { type ClassValue } from 'clsx'; // clsx 라이브러리에서 ClassValue 타입과 기본 함수를 가져옴
import { twMerge as _twMerge } from 'tailwind-merge'; // tailwind-merge의 twMerge 함수를 가져오되, 이름을 _twMerge로 변경

// Tailwind CSS 클래스 병합 유틸리티 함수 정의
export default function twMerge(...inputs: ClassValue[]) {
  return _twMerge(clsx(...inputs)); //
  // 1. clsx(...inputs) → 여러 개의 클래스를 하나의 문자열로 변환
  // 2. _twMerge(...) → Tailwind CSS의 중복되는 클래스를 제거하고 최적화하여 반환
}

// tm이라는 별칭을 생성하여 twMerge를 동일한 기능으로 사용할 수 있도록 함
export const tm = twMerge;

/* ✅ 사용 예제

const className = tm('text-red-500', 'text-blue-500', 'font-bold', 'hidden', false && 'block');
console.log(className); // 'text-blue-500 font-bold hidden' (중복 제거 및 false 값 제외)

*/

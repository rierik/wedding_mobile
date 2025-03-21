import { create } from 'zustand';

// Zustand 스토어 정의
interface FontStore {
  selectedFont: string;
  setFont: (font: string) => void;
}

// Zustand 스토어 생성
const useFontStore = create<FontStore>((set) => ({
  selectedFont: localStorage.getItem('selectedFont') || 'Arial', // 로컬스토리지에서 불러오기
  setFont: (font) => {
    localStorage.setItem('selectedFont', font); // 변경된 폰트 저장
    set({ selectedFont: font });
  },
}));

export default useFontStore;

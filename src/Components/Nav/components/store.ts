import { createStore } from "@/Components/Utils/components/store/index.ts";

type State = {
  activeIndex: number;
  isOpen: boolean;
  setActiveIndex: (activeIndex: number) => void;
  setIsOpen: (isOpen: boolean) => void;
};
export const useNavStore = createStore<State>((set) => ({
  activeIndex: 0,
  isOpen: false,
  setActiveIndex: (activeIndex) => set({ activeIndex }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

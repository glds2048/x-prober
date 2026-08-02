import { createImmerStore } from "@/Components/Utils/components/store/index.ts";

type State = {
  isOpen: boolean;
  msg: string;
  timerId: NodeJS.Timeout | null;
  setMsg: (msg: string) => void;
  open: (msg?: string) => void;
  close: (delaySeconds?: number) => void;
};
export const useToastStore = createImmerStore<State>((set, get) => ({
  close: (delaySeconds = 0) => {
    const currentTimerId = get().timerId;
    if (currentTimerId) {
      clearTimeout(currentTimerId);
    }
    if (delaySeconds === 0) {
      set((state) => {
        state.isOpen = false;
        state.timerId = null;
      });
      return;
    }
    const id = setTimeout(() => {
      set((state) => {
        state.isOpen = false;
        state.timerId = null;
      });
    }, delaySeconds * 1000);
    set((state) => {
      state.timerId = id;
    });
  },
  isOpen: false,
  msg: "",
  open: (msg) =>
    set((state) => {
      if (state.timerId) {
        clearTimeout(state.timerId);
      }
      state.isOpen = true;
      state.msg = msg ?? "";
      state.timerId = null;
    }),
  setMsg: (msg) =>
    set((state) => {
      state.msg = msg;
    }),
  timerId: null,
}));

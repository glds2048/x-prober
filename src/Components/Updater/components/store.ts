import { createStore } from "@/Components/Utils/components/store/index.js";

type State = {
  isUpdating: boolean;
  hasUpdateError: boolean;
  targetVersion: string;
  setTargetVersion: (targetVersion: string) => void;
  setIsUpdating: (isUpdating: boolean) => void;
  setHasUpdateError: (hasUpdateError: boolean) => void;
};
export const useUpdaterStore = createStore<State>((set) => ({
  hasUpdateError: false,
  isUpdating: false,
  setHasUpdateError: (hasUpdateError: boolean) => {
    set({ hasUpdateError });
  },
  setIsUpdating: (isUpdating: boolean) => {
    set({ isUpdating });
  },
  setTargetVersion: (targetVersion: string) => {
    set({ targetVersion });
  },
  targetVersion: "",
}));

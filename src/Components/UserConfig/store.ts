import { createStore } from "../Utils/components/store/index.js";
import type { UserConfigProps } from "./types.js";

type State = {
  pollData: UserConfigProps | null;
  setPollData: (pollData: UserConfigProps | null) => void;
};
export const useUserConfigStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

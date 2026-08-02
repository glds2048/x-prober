import { createStore } from "../Utils/components/store/index.ts";
import type { UserConfigProps } from "./types.ts";

type State = {
  pollData: UserConfigProps | null;
  setPollData: (pollData: UserConfigProps | null) => void;
};
export const useUserConfigStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

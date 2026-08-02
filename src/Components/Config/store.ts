import { createStore } from "../Utils/components/store/index.ts";
import type { ConfigProps } from "./types.ts";

type State = {
  pollData: ConfigProps | null;
  setPollData: (pollData: ConfigProps | null) => void;
};
export const useConfigStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

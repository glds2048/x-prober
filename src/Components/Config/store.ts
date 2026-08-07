import { createStore } from "../Utils/components/store/index.js";
import type { ConfigProps } from "./types.js";

type State = {
  pollData: ConfigProps | null;
  setPollData: (pollData: ConfigProps | null) => void;
};
export const useConfigStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

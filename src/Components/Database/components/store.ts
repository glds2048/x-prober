import { createStore } from "@/Components/Utils/components/store/index.js";
import type { DatabasePollDataProps } from "./types.js";

type State = {
  pollData: DatabasePollDataProps | null;
  setPollData: (pollData: DatabasePollDataProps | null) => void;
};
export const useDatabaseStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

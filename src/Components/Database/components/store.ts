import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { DatabasePollDataProps } from "./types.ts";

type State = {
  pollData: DatabasePollDataProps | null;
  setPollData: (pollData: DatabasePollDataProps | null) => void;
};
export const useDatabaseStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

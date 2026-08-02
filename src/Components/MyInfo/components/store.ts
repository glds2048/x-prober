import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { MyInfoPollDataProps } from "./types.ts";

type State = {
  pollData: MyInfoPollDataProps | null;
  setPollData: (pollData: MyInfoPollDataProps | null) => void;
};
export const useMyInfoStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

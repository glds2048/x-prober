import { createStore } from "@/Components/Utils/components/store/index.js";
import type { BootstrapPollDataModel } from "./types.js";

type State = {
  pollData: BootstrapPollDataModel | null;
  setPollData: (pollData: BootstrapPollDataModel | null) => void;
};
export const useBootstrapStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

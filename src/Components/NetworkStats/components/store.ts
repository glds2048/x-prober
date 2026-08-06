import { createStore } from "@/Components/Utils/components/store/index.js";
import type { NetworkStatsPollDataProps } from "./types.js";

type State = {
  pollData: NetworkStatsPollDataProps | null;
  setPollData: (pollData: NetworkStatsPollDataProps | null) => void;
};
export const useNetworkStatsStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

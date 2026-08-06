import { createStore } from "@/Components/Utils/components/store/index.js";
import type { DiskUsagePollDataProps } from "./types.js";

type State = {
  pollData: DiskUsagePollDataProps | null;
  setPollData: (pollData: DiskUsagePollDataProps | null) => void;
};
export const useDiskUsageStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

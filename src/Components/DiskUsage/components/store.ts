import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { DiskUsagePollDataProps } from "./types.ts";

type State = {
  pollData: DiskUsagePollDataProps | null;
  setPollData: (pollData: DiskUsagePollDataProps | null) => void;
};
export const useDiskUsageStore = createStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

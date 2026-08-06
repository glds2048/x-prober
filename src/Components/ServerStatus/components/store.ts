import { createStore } from "@/Components/Utils/components/store/index.js";
import type { ServerStatusPollDataProps } from "./types.js";

type State = {
  pollData: ServerStatusPollDataProps | null;
  setPollData: (pollData: ServerStatusPollDataProps | null) => void;
};
const initPollData: ServerStatusPollDataProps = {
  cpuUsage: { idle: 100, sys: 0, usage: 0, user: 0 },
  memBuffers: { max: 0, value: 0 },
  memCached: { max: 0, value: 0 },
  memRealUsage: { max: 0, value: 0 },
  swapCached: { max: 0, value: 0 },
  swapUsage: { max: 0, value: 0 },
  sysLoad: [0, 0, 0],
};
export const useServerStatusStore = createStore<State>((set) => ({
  pollData: initPollData,
  setPollData: (pollData) => set({ pollData }),
}));

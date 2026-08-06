import { createStore } from "@/Components/Utils/components/store/index.js";
import type { TemperatureSensorPollDataProps } from "./types.js";

type State = {
  pollData: TemperatureSensorPollDataProps | null;
  latestPhpVersion: string;
  setPollData: (pollData: TemperatureSensorPollDataProps | null) => void;
  setLatestPhpVersion: (latestPhpVersion: string) => void;
};
export const useTemperatureSensorStore = createStore<State>((set) => ({
  latestPhpVersion: "",
  pollData: null,
  setLatestPhpVersion: (latestPhpVersion) => set({ latestPhpVersion }),
  setPollData: (pollData) => set({ pollData }),
}));

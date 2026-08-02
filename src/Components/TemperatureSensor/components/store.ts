import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { TemperatureSensorPollDataProps } from "./types.ts";

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

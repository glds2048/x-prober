import { createStore } from "@/Components/Utils/components/store/index.js";
import type { PhpInfoPollDataProps } from "./types.js";

type State = {
  pollData: PhpInfoPollDataProps | null;
  latestPhpVersion: string;
  setPollData: (pollData: PhpInfoPollDataProps | null) => void;
  setLatestPhpVersion: (latestPhpVersion: string) => void;
};
export const usePhpInfoStore = createStore<State>((set) => ({
  latestPhpVersion: "",
  pollData: null,
  setLatestPhpVersion: (latestPhpVersion) => set({ latestPhpVersion }),
  setPollData: (pollData) => set({ pollData }),
}));

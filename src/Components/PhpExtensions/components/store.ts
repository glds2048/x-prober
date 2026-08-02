import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { PhpExtensionsPollDataProps } from "./types.ts";

type State = {
  pollData: PhpExtensionsPollDataProps | null;
  setPollData: (pollData: PhpExtensionsPollDataProps | null) => void;
};
export const usePhpExtensionsStore = createStore<State>((set) => ({
  latestPhpVersion: "",
  pollData: null,
  setPollData: (pollData) => set({ pollData }),
}));

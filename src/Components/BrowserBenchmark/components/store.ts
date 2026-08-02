import { createImmerStore } from "@/Components/Utils/components/store/index.ts";
import type { BrowserBenchmarkProps } from "./types.ts";

type State = {
  benchmarking: boolean;
  maxMarks: number;
  browsers: BrowserBenchmarkProps[];
  setBenchmarking: (benchmarking: boolean) => void;
  setMaxMarks: (maxMarks: number) => void;
  setBrowsers: (browsers: BrowserBenchmarkProps[]) => void;
  setBrowser: (
    id: BrowserBenchmarkProps["id"],
    item: BrowserBenchmarkProps
  ) => void;
};
export const useBrowserBenchmarkStore = createImmerStore<State>((set) => ({
  benchmarking: false,
  browsers: [],
  maxMarks: 0,
  setBenchmarking: (benchmarking) =>
    set((state) => {
      state.benchmarking = benchmarking;
    }),
  setBrowser: (id, item) =>
    set((state) => {
      const i = state.browsers.findIndex((n) => n.id === id);
      if (i === -1) {
        return;
      }
      state.browsers[i] = item;
    }),
  setBrowsers: (browsers) =>
    set((state) => {
      state.browsers = browsers;
    }),
  setMaxMarks: (maxMarks) =>
    set((state) => {
      state.maxMarks = maxMarks;
    }),
}));

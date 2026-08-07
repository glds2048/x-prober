import type { ModuleProps } from "@/Components/Module/components/types.js";
import { BROWSER_BENCHMARK_ID as id } from "./constants.js";
import { BrowserBenchmark as content } from "./index.js";
import { BrowserBenchmarkNav as nav } from "./nav.js";

export const BrowserBenchmarkLoader: ModuleProps = {
  content,
  id,
  nav,
};

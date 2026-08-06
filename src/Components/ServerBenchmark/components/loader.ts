import type { ModuleProps } from "@/Components/Module/components/types.js";
import { SERVER_BENCHMARK_ID as id } from "./constants.js";
import { ServerBenchmark as content } from "./index.js";
import { ServerBenchmarkNav as nav } from "./nav.js";

export const ServerBenchmarkLoader: ModuleProps = {
  content,
  id,
  nav,
};

import type { ModuleProps } from "@/Components/Module/components/types.js";
import { NETWORK_STATS_ID as id } from "./constants.js";
import { NetworkStats as content } from "./index.js";
import { NetworkStatsNav as nav } from "./nav.js";

export const NetworkStatsLoader: ModuleProps = {
  content,
  id,
  nav,
};

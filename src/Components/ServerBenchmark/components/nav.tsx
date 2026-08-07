import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { SERVER_BENCHMARK_ID } from "./constants.js";

export const ServerBenchmarkNav: FC = () => (
  <NavItem id={SERVER_BENCHMARK_ID} title={gettext("Server bench")} />
);

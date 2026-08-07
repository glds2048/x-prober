import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { BROWSER_BENCHMARK_ID } from "./constants.js";

export const BrowserBenchmarkNav: FC = () => (
  <NavItem id={BROWSER_BENCHMARK_ID} title={gettext("Browser bench")} />
);

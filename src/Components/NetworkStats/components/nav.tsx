import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { NETWORK_STATS_ID } from "./constants.js";
import { useNetworkStatsStore } from "./store.js";

export const NetworkStatsNav: FC = () => {
  const hasNetworks = useNetworkStatsStore((s) =>
    Boolean(s.pollData?.networks.length)
  );
  if (!hasNetworks) {
    return null;
  }
  return <NavItem id={NETWORK_STATS_ID} title={gettext("Network")} />;
};

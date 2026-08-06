import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { DISK_USAGE_ID } from "./constants.js";
import { useDiskUsageStore } from "./store.js";

export const DiskUsageNav: FC = () => {
  const hasItem = useDiskUsageStore((s) => Boolean(s.pollData?.items.length));
  if (!hasItem) {
    return null;
  }
  return <NavItem id={DISK_USAGE_ID} title={gettext("Disk")} />;
};

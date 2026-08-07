import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { SERVER_STATUS_ID } from "./constants.js";
import { useServerStatusStore } from "./store.js";

export const ServerStatusNav: FC = () => {
  const hasPollData = useServerStatusStore((s) => Boolean(s.pollData));
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={SERVER_STATUS_ID} title={gettext("Info")} />;
};

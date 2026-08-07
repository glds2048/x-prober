import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { SERVER_INFO_ID } from "./constants.js";
import { useServerInfoStore } from "./store.js";

export const ServerInfoNav: FC = () => {
  const hasPollData = useServerInfoStore((s) => Boolean(s.pollData));
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={SERVER_INFO_ID} title={gettext("Info")} />;
};

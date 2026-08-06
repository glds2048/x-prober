import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { MY_INFO_ID } from "./constants.js";
import { useMyInfoStore } from "./store.js";

export const MyInfoNav: FC = () => {
  const hasPollData = useMyInfoStore((s) => Boolean(s.pollData));
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={MY_INFO_ID} title={gettext("Mine")} />;
};

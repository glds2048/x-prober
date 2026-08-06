import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { PHP_INFO_ID } from "./constants.js";
import { usePhpInfoStore } from "./store.js";

export const PhpInfoNav: FC = () => {
  const hasPollData = usePhpInfoStore((s) => Boolean(s.pollData));
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={PHP_INFO_ID} title={gettext("PHP Info")} />;
};

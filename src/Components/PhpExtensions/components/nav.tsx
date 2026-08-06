import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { PHP_EXTENSIONS_ID } from "./constants.js";
import { usePhpExtensionsStore } from "./store.js";

export const PhpExtensionsNav: FC = () => {
  const hasPollData = usePhpExtensionsStore((s) => Boolean(s.pollData));
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={PHP_EXTENSIONS_ID} title={gettext("PHP Ext")} />;
};

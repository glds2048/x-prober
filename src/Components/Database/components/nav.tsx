import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { DATABASE_ID } from "./constants.js";

export const DatabaseNav: FC = () => (
  <NavItem id={DATABASE_ID} title={gettext("DB")} />
);

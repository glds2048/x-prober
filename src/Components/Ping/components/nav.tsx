import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { PING_ID } from "./constants.js";

export const PingNav: FC = () => (
  <NavItem id={PING_ID} title={gettext("Ping")} />
);

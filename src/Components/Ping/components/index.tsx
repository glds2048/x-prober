import { type FC, memo } from "react";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { PING_ID } from "./constants.js";
import { PingServerToBrowser } from "./server-browser.js";

export const Ping: FC = memo(() => (
  <ModuleItem id={PING_ID} title={gettext("Ping")}>
    <PingServerToBrowser />
  </ModuleItem>
));

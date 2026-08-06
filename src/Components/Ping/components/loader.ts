import type { ModuleProps } from "@/Components/Module/components/types.js";
import { PING_ID as id } from "./constants.js";
import { Ping as content } from "./index.js";
import { PingNav as nav } from "./nav.js";

export const PingLoader: ModuleProps = {
  content,
  id,
  nav,
};

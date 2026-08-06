import type { ModuleProps } from "@/Components/Module/components/types.js";
import { SERVER_INFO_ID as id } from "./constants.js";
import { ServerInfo as content } from "./index.js";
import { ServerInfoNav as nav } from "./nav.js";

export const ServerInfoLoader: ModuleProps = {
  content,
  id,
  nav,
};

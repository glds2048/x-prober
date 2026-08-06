import type { ModuleProps } from "@/Components/Module/components/types.js";
import { SERVER_STATUS_ID as id } from "./constants.js";
import { ServerStatus as content } from "./index.js";
import { ServerStatusNav as nav } from "./nav.js";

export const ServerStatusLoader: ModuleProps = {
  content,
  id,
  nav,
};

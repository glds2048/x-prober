import type { ModuleProps } from "@/Components/Module/components/types.js";
import { DATABASE_ID as id } from "./constants.js";
import { Database as content } from "./index.js";
import { DatabaseNav as nav } from "./nav.js";

export const DatabaseLoader: ModuleProps = {
  content,
  id,
  nav,
};

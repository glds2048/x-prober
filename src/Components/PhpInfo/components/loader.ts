import type { ModuleProps } from "@/Components/Module/components/types.js";
import { PHP_INFO_ID as id } from "./constants.js";
import { PhpInfo as content } from "./index.js";
import { PhpInfoNav as nav } from "./nav.js";

export const PhpInfoLoader: ModuleProps = {
  content,
  id,
  nav,
};

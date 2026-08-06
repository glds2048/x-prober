import type { ModuleProps } from "@/Components/Module/components/types.js";
import { PHP_EXTENSIONS_ID as id } from "./constants.js";
import { PhpExtensions as content } from "./index.js";
import { PhpExtensionsNav as nav } from "./nav.js";

export const PhpExtensionsLoader: ModuleProps = {
  content,
  id,
  nav,
};

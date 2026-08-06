import type { ModuleProps } from "@/Components/Module/components/types.js";
import { NODES_ID as id } from "./constants.js";
import { Nodes as content } from "./index.js";
import { NodesNav as nav } from "./nav.js";

export const NodesLoader: ModuleProps = {
  content,
  id,
  nav,
};

import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { NODES_ID } from "./constants.js";
import { useNodesStore } from "./store.js";

export const NodesNav: FC = () => {
  const hasNodes = useNodesStore((s) => Boolean(s.pollData?.nodesIds.length));
  if (!hasNodes) {
    return null;
  }
  return <NavItem id={NODES_ID} title={gettext("Nodes")} />;
};

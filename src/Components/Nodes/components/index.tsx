import { type FC, memo } from "react";
import { useShallow } from "zustand/react/shallow";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { NODES_ID } from "./constants.js";
import styles from "./index.module.scss";
import { Node } from "./node.js";
import { useNodesStore } from "./store.js";

export const Nodes: FC = memo(() => {
  const nodesIds = useNodesStore(useShallow((s) => s.pollData?.nodesIds ?? []));
  if (!nodesIds.length) {
    return null;
  }
  return (
    <ModuleItem id={NODES_ID} title={gettext("Nodes")}>
      <div className={styles.main}>
        {nodesIds.map((id) => (
          <Node id={id} key={id} />
        ))}
      </div>
    </ModuleItem>
  );
});

import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { SERVER_STATUS_ID } from "./constants.js";
import styles from "./index.module.scss";
import { MemBuffers } from "./mem-buffers.js";
import { MemCached } from "./mem-cached.js";
import { MemRealUsage } from "./mem-real-usage.js";
import { SwapCached } from "./swap-cached.js";
import { SwapUsage } from "./swap-usage.js";
import { SystemLoad } from "./system-load.js";

export const ServerStatus: FC = () => (
  <ModuleItem id={SERVER_STATUS_ID} title={gettext("Server Status")}>
    <div className={styles.main}>
      <SystemLoad />
      <MemRealUsage />
      <MemCached />
      <MemBuffers />
      <SwapUsage />
      <SwapCached />
    </div>
  </ModuleItem>
);

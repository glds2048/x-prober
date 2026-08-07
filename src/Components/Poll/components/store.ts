// 1. 导入所有需要同步更新的子 Store
import { useConfigStore } from "@/Components/Config/store.js";
import { useDatabaseStore } from "@/Components/Database/components/store.js";
import { useDiskUsageStore } from "@/Components/DiskUsage/components/store.js";
import { useMyInfoStore } from "@/Components/MyInfo/components/store.js";
import { useNetworkStatsStore } from "@/Components/NetworkStats/components/store.js";
import { useNodesStore } from "@/Components/Nodes/components/store.js";
import { usePhpExtensionsStore } from "@/Components/PhpExtensions/components/store.js";
import { usePhpInfoStore } from "@/Components/PhpInfo/components/store.js";
import { useServerInfoStore } from "@/Components/ServerInfo/components/store.js";
import { useServerStatusStore } from "@/Components/ServerStatus/components/store.js";
import { useTemperatureSensorStore } from "@/Components/TemperatureSensor/components/store.js";
import { useUserConfigStore } from "@/Components/UserConfig/store.js";
import { createImmerStore } from "@/Components/Utils/components/store/index.js";
import type { PollData } from "./types.js";

type State = {
  pollData: PollData | null;
  setPollData: (pollData: PollData | null) => void;
};
export const usePollStore = createImmerStore<State>((set) => ({
  pollData: null,
  setPollData: (pollData) => {
    set((state) => {
      state.pollData = pollData;
    });
    useConfigStore.getState().setPollData(pollData?.config ?? null);
    useUserConfigStore.getState().setPollData(pollData?.userConfig ?? null);
    useDatabaseStore.getState().setPollData(pollData?.database ?? null);
    useMyInfoStore.getState().setPollData(pollData?.myInfo ?? null);
    usePhpInfoStore.getState().setPollData(pollData?.phpInfo ?? null);
    useDiskUsageStore.getState().setPollData(pollData?.diskUsage ?? null);
    usePhpExtensionsStore
      .getState()
      .setPollData(pollData?.phpExtensions ?? null);
    useNetworkStatsStore.getState().setPollData(pollData?.networkStats ?? null);
    useServerStatusStore.getState().setPollData(pollData?.serverStatus ?? null);
    useServerInfoStore.getState().setPollData(pollData?.serverInfo ?? null);
    useNodesStore.getState().setPollData(pollData?.nodes ?? null);
    useTemperatureSensorStore
      .getState()
      .setPollData(pollData?.temperatureSensor ?? null);
  },
}));

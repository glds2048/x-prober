import type { ConfigProps } from "@/Components/Config/types.js";
import type { DatabasePollDataProps } from "@/Components/Database/components/types.js";
import type { DiskUsagePollDataProps } from "@/Components/DiskUsage/components/types.js";
import type { MyInfoPollDataProps } from "@/Components/MyInfo/components/types.js";
import type { NetworkStatsPollDataProps } from "@/Components/NetworkStats/components/types.js";
import type { NodesPollDataProps } from "@/Components/Nodes/components/types.js";
import type { PhpExtensionsPollDataProps } from "@/Components/PhpExtensions/components/types.js";
import type { PhpInfoPollDataProps } from "@/Components/PhpInfo/components/types.js";
import type { ServerInfoPollDataProps } from "@/Components/ServerInfo/components/types.js";
import type { ServerStatusPollDataProps } from "@/Components/ServerStatus/components/types.js";
import type { TemperatureSensorPollDataProps } from "@/Components/TemperatureSensor/components/types.js";
import type { UserConfigProps } from "@/Components/UserConfig/types.js";

export type PollData = {
  config: ConfigProps | null;
  userConfig: UserConfigProps | null;
  database: DatabasePollDataProps | null;
  myInfo: MyInfoPollDataProps | null;
  phpInfo: PhpInfoPollDataProps | null;
  diskUsage: DiskUsagePollDataProps | null;
  networkStats: NetworkStatsPollDataProps | null;
  phpExtensions: PhpExtensionsPollDataProps | null;
  serverStatus: ServerStatusPollDataProps | null;
  serverInfo: ServerInfoPollDataProps | null;
  nodes: NodesPollDataProps | null;
  temperatureSensor: TemperatureSensorPollDataProps | null;
};

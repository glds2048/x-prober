import { BrowserBenchmarkLoader } from "@/Components/BrowserBenchmark/components/loader.js";
import { DatabaseLoader } from "@/Components/Database/components/loader.js";
import { DiskUsageLoader } from "@/Components/DiskUsage/components/loader.js";
import { MyInfoLoader } from "@/Components/MyInfo/components/loader.js";
import { NetworkStatsLoader } from "@/Components/NetworkStats/components/loader.js";
import { NodesLoader } from "@/Components/Nodes/components/loader.js";
import { PhpExtensionsLoader } from "@/Components/PhpExtensions/components/loader.js";
import { PhpInfoLoader } from "@/Components/PhpInfo/components/loader.js";
import { PingLoader } from "@/Components/Ping/components/loader.js";
import { ServerBenchmarkLoader } from "@/Components/ServerBenchmark/components/loader.js";
import { ServerInfoLoader } from "@/Components/ServerInfo/components/loader.js";
import { ServerStatusLoader } from "@/Components/ServerStatus/components/loader.js";
import { TemperatureSensorLoader } from "@/Components/TemperatureSensor/components/loader.js";

export const presetModules = [
  NodesLoader,
  TemperatureSensorLoader,
  ServerStatusLoader,
  NetworkStatsLoader,
  DiskUsageLoader,
  PingLoader,
  ServerInfoLoader,
  PhpInfoLoader,
  PhpExtensionsLoader,
  DatabaseLoader,
  ServerBenchmarkLoader,
  BrowserBenchmarkLoader,
  MyInfoLoader,
];

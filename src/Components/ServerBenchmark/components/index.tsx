import { type FC, memo } from "react";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { UiDescription } from "@/Components/ui/description/index.js";
import { SERVER_BENCHMARK_ID } from "./constants.js";
import { ServerBenchmarkServers } from "./servers.js";

export const ServerBenchmark: FC = memo(() => (
  <ModuleItem id={SERVER_BENCHMARK_ID} title={gettext("Server Benchmark")}>
    <UiDescription
      items={[
        {
          id: "serverBenchmarkTos",
          text: gettext(
            "Different versions cannot be compared, and different time servers have different loads, just for reference."
          ),
        },
      ]}
    />
    <ServerBenchmarkServers />
  </ModuleItem>
));

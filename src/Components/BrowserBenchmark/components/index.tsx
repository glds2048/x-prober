import { type FC, memo } from "react";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { UiDescription } from "@/Components/ui/description/index.js";
import { BrowserBenchmarkBrowsers } from "./browsers.js";
import { BROWSER_BENCHMARK_ID } from "./constants.js";

export const BrowserBenchmark: FC = memo(() => (
  <ModuleItem id={BROWSER_BENCHMARK_ID} title={gettext("Browser Benchmark")}>
    <UiDescription
      items={[
        {
          id: "browserBenchmarkTos",
          text: gettext(
            "Different versions cannot be compared, and different time clients have different loads, just for reference."
          ),
        },
      ]}
    />
    <BrowserBenchmarkBrowsers />
  </ModuleItem>
));

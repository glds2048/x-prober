import type { ModuleProps } from "@/Components/Module/components/types.js";
import { TEMPERATURE_SENSOR_ID as id } from "./constants.js";
import { TemperatureSensor as content } from "./index.js";
import { TemperatureSensorNav as nav } from "./nav.js";

export const TemperatureSensorLoader: ModuleProps = {
  content,
  id,
  nav,
};

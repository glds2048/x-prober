import type { FC } from "react";
import { gettext } from "@/Components/Language/index.js";
import { NavItem } from "@/Components/Nav/components/item.js";
import { TEMPERATURE_SENSOR_ID } from "./constants.js";
import { useTemperatureSensorStore } from "./store.js";

export const TemperatureSensorNav: FC = () => {
  const hasPollData = useTemperatureSensorStore((s) =>
    Boolean(s.pollData?.length)
  );
  if (!hasPollData) {
    return null;
  }
  return <NavItem id={TEMPERATURE_SENSOR_ID} title={gettext("Temperature")} />;
};

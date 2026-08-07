import type { FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { gettext } from "@/Components/Language/index.js";
import { ModuleItem } from "@/Components/Module/components/item.js";
import { TEMPERATURE_SENSOR_ID } from "./constants.js";
import styles from "./index.module.scss";
import { TempperatureSensorItem } from "./item.js";
import { useTemperatureSensorStore } from "./store.js";

export const TemperatureSensor: FC = () => {
  const items = useTemperatureSensorStore(useShallow((s) => s.pollData ?? []));
  if (!items.length) {
    return null;
  }
  return (
    <ModuleItem
      id={TEMPERATURE_SENSOR_ID}
      title={gettext("Temperature sensor")}
    >
      <div className={styles.main}>
        {items.map(({ id, name, celsius }) => (
          <TempperatureSensorItem key={id} label={name} value={celsius} />
        ))}
      </div>
    </ModuleItem>
  );
};

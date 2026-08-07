import type { FC } from "react";
import { gettext } from "@/Components/Language";
import { MeterCore } from "@/Components/Meter/components";
import { template } from "@/Components/Utils/components/template";
import styles from "./item.module.scss";
export const TempperatureSensorItem: FC<{
  label: string;
  value: number;
  max?: number;
}> = ({ label, value, max = 100 }) => (
  <div
    className={styles.main}
    title={template(gettext("{{sensor}} temperature"), {
      sensor: label,
    })}
  >
    <div className={styles.label}>{label}</div>
    <div className={styles.usage}>
      {template(gettext("{{temperature}} ℃"), {
        temperature: value,
      })}
    </div>
    <div className={styles.meter}>
      <MeterCore max={max} value={value} />
    </div>
  </div>
);

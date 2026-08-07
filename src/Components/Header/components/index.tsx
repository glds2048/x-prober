import type { FC } from "react";
import { Theme } from "@/Components/Theme/components/index.js";
import styles from "./index.module.scss";
import { HeaderName } from "./name.js";

export const Header: FC = () => (
  <div className={styles.main}>
    <HeaderName />
    <Theme />
  </div>
);

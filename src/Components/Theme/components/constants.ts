import { gettext } from "@/Components/Language/index.js";

export const themes = [
  {
    id: "dark",
    name: gettext("LiangYe"),
  },
  {
    id: "light",
    name: gettext("XiGuang"),
  },
] as const;

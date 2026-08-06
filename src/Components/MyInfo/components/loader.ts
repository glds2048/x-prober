import type { ModuleProps } from "@/Components/Module/components/types.js";
import { MY_INFO_ID as id } from "./constants.js";
import { MyInfo as content } from "./index.js";
import { MyInfoNav as nav } from "./nav";
export const MyInfoLoader: ModuleProps = {
  content,
  id,
  nav,
};

import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { usePollStore } from "@/Components/Poll/components/store.js";
import type { PollData } from "@/Components/Poll/components/types.js";
import { presetModules } from "./preset.js";
import { useModuleStore } from "./store.js";
import type { ModuleProps } from "./types.js";

export const useAvailableModules = (): ModuleProps[] => {
  const priorities = useModuleStore(useShallow((s) => s.priorities));

  // 1. 在选择器中直接计算出当前有哪些有效的 key
  const validPollKeys = usePollStore(
    useShallow((s) => {
      if (!s.pollData) {
        return [];
      }
      // 过滤出不为 null 且存在的 key
      return Object.keys(s.pollData).filter(
        (key) => s.pollData?.[key as keyof PollData] !== null
      );
    })
  );

  // 2. 此时的缓存只依赖 priorities 和 validPollKeys
  const available = useMemo(() => {
    if (validPollKeys.length === 0) {
      return [];
    }

    const maps = new Map(presetModules.map((item) => [item.id, item]));
    const validKeysSet = new Set(validPollKeys);

    return priorities
      .map((id) => maps.get(id))
      .filter((n): n is ModuleProps => !!n && validKeysSet.has(n.id));
  }, [priorities, validPollKeys]);

  return available;
};

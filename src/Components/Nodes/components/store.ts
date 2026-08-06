import { isDeepEqual } from "@/Components/Utils/components/is-deep-equal/index.js";
import { createImmerStore } from "@/Components/Utils/components/store/index.js";
import type { NodesItemProps, NodesPollDataProps } from "./types.js";

type State = {
  items: NodesItemProps[];
  pollData: NodesPollDataProps | null;
  setPollData: (pollData: NodesPollDataProps | null) => void;
  setItems: (items: NodesItemProps[]) => void;
  setItem: ({ id, ...props }: Partial<NodesItemProps>) => void;
};
export const useNodesStore = createImmerStore<State>((set) => ({
  items: [],
  pollData: null,
  setItem: ({ id, ...props }) => {
    set((state) => {
      const item = state.items.find((n) => n.id === id);
      if (item) {
        Object.assign(item, props);
      }
    });
  },
  setItems: (items) => set({ items }),
  setPollData: (data) => {
    set((state) => {
      if (isDeepEqual(data, state.pollData)) {
        return;
      }
      state.pollData = data;
    });
  },
}));

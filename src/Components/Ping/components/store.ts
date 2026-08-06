import { createImmerStore } from "@/Components/Utils/components/store/index.js";
import type { ServerToBrowserPingItemProps } from "./types.js";

type State = {
  isPingServerToBrowser: boolean;
  isPingServerToServer: boolean;
  serverToBrowserPingItems: ServerToBrowserPingItemProps[];
  serverToServerPingItems: ServerToBrowserPingItemProps[];
  // server to server
  setIsPingServerToServer: (isPing: boolean) => void;
  setServerToServerPingItems: (items: ServerToBrowserPingItemProps[]) => void;
  addServerToServerPingItem: (item: ServerToBrowserPingItemProps) => void;
  // server to browser
  setIsPingServerToBrowser: (isPing: boolean) => void;
  setServerToBrowserPingItems: (items: ServerToBrowserPingItemProps[]) => void;
  addServerToBrowserPingItem: (item: ServerToBrowserPingItemProps) => void;
};
export const usePingStore = createImmerStore<State>((set) => ({
  addServerToBrowserPingItem: (item) =>
    set((state) => {
      state.serverToBrowserPingItems.push(item);
    }),
  addServerToServerPingItem: (item) =>
    set((state) => {
      state.serverToServerPingItems.push(item);
    }),
  isPingServerToBrowser: false,
  isPingServerToServer: false,
  serverToBrowserPingItems: [],
  serverToServerPingItems: [],
  // server to browser
  setIsPingServerToBrowser: (isPing) =>
    set((state) => {
      state.isPingServerToBrowser = isPing;
    }),
  // server to server
  setIsPingServerToServer: (isPing) =>
    set((state) => {
      state.isPingServerToServer = isPing;
    }),
  setServerToBrowserPingItems: (items) =>
    set((state) => {
      state.serverToBrowserPingItems = items;
    }),
  setServerToServerPingItems: (items) =>
    set((state) => {
      state.serverToServerPingItems = items;
    }),
}));

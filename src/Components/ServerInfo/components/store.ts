import { createStore } from "@/Components/Utils/components/store/index.ts";
import type { ServerInfoPollDataProps } from "./types.ts";

type State = {
  pollData: ServerInfoPollDataProps | null;
  publicIpv4: string;
  publicIpv6: string;
  setPollData: (pollData: ServerInfoPollDataProps | null) => void;
  setPublicIpv4: (ipv4: string) => void;
  setPublicIpv6: (ipv6: string) => void;
};
export const useServerInfoStore = createStore<State>((set) => ({
  pollData: null,
  publicIpv4: "",
  publicIpv6: "",
  setPollData: (pollData) => set({ pollData }),
  setPublicIpv4: (publicIpv4) => set({ publicIpv4 }),
  setPublicIpv6: (publicIpv6) => set({ publicIpv6 }),
}));

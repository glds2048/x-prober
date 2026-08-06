import type { FC } from "react";
import { NetworksStatsItem } from "@/Components/NetworkStats/components/item.js";
import type { NetworkStatsPollDataProps } from "@/Components/NetworkStats/components/types.js";
import { usePrevious } from "@/Components/Utils/components/use-previous.js";
import styles from "./network.module.scss";

export const NodesNetworkStats: FC<{ data: NetworkStatsPollDataProps }> = ({
  data,
}) => {
  const { networks, timestamp } = data;
  const prevData = usePrevious({
    items: networks,
    timestamp,
  });
  const seconds = timestamp - (prevData?.timestamp || timestamp);
  return (
    <div className={styles.main}>
      {networks.map(({ id, rx, tx }) => {
        if (!(rx || tx)) {
          return null;
        }
        const prevItem = (prevData?.items || networks).find(
          (item) => item.id === id
        );
        const prevRx = prevItem?.rx || 0;
        const prevTx = prevItem?.tx || 0;
        return (
          <NetworksStatsItem
            id={id}
            key={id}
            rateRx={(rx - prevRx) / seconds}
            rateTx={(tx - prevTx) / seconds}
            totalRx={rx}
            totalTx={tx}
          />
        );
      })}
    </div>
  );
};

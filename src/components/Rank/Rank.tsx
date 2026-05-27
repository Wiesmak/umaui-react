import RankA from "./RankA";
import RankB from "./RankB";
import RankC from "./RankC";
import RankD from "./RankD";
import RankE from "./RankE";
import RankF from "./RankF";
import RankG from "./RankG";
import RankS from "./RankS";
import RankSS from "./RankSS";
import RankPlus from "./RankPlus";
import styles from "./Rank.module.scss";

interface RankProps {
  rank: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "S" | "SS";
  size?: number;
  plus?: boolean;
}

const rankComponentMap = {
  A: RankA,
  B: RankB,
  C: RankC,
  D: RankD,
  E: RankE,
  F: RankF,
  G: RankG,
  S: RankS,
  SS: RankSS,
} as const;

export default function Rank({ rank = "C", size = 18, plus = false }: RankProps) {
  const SelectedComponent = rankComponentMap[rank] ?? RankC;
  const plusSize = Math.floor(size / 2);

  return (
    <>
      <SelectedComponent width={size} height={size} />
      {plus ? (
        <RankPlus
          width={plusSize}
          height={plusSize}
          className={styles[rank]}
        />
      ) : null}
    </>
  );
}

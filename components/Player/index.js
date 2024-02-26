import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import cx from "classnames";
import styles from "@/components/Player/index.module.css";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;

  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.active]: isActive,
        [styles.notPlaying]: !playing,
      })}
    >
      <ReactPlayer
        url={url}
        muted={muted}
        playing={playing}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Player;

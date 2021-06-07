import ShinyText from "./ShinyText";
import styles from "./Names.module.css";

type Props = {
  names: [string, string];
  symbol?: string;
  className?: string;
};

const Names = ({ names, symbol = "&", className = "" }: Props) => (
  <h1 className={`${styles.names} ${className}`}>
    <ShinyText className={styles.name}>
      {names[0].replace(/ /g, "\n")}
    </ShinyText>

    <ShinyText className={styles.ampersand}>{symbol}</ShinyText>

    <ShinyText className={styles.name}>
      {names[1].replace(/ /g, "\n")}
    </ShinyText>
  </h1>
);

export default Names;

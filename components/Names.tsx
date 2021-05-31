import styles from "./Names.module.css";

type Props = {
  names: [string, string];
  symbol?: string;
  className?: string;
};

const Names = ({ names, symbol = "&", className = "" }: Props) => (
  <h1 className={`${styles.names} ${className}`}>
    <span className={styles.name}>{names[0].replace(/ /g, "\n")}</span>

    <span className={styles.ampersand}>{symbol}</span>

    <span className={styles.name}>{names[1].replace(/ /g, "\n")}</span>
  </h1>
);

export default Names;

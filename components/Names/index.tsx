import Shiny from "../Text/Shiny";
import styles from "./styles.module.css";

type Props = {
  names: [string, string];
  symbol?: string;
  className?: string;
};

const Names = ({ names, symbol = "&", className = "" }: Props) => (
  <h1 className={`${styles.names} ${className}`}>
    <Shiny className={styles.name}>{names[0].replace(/ /g, "\n")}</Shiny>

    <Shiny className={styles.ampersand}>{symbol}</Shiny>

    <Shiny className={styles.name}>{names[1].replace(/ /g, "\n")}</Shiny>
  </h1>
);

export default Names;

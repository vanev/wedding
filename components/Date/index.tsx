import Shiny from "../Text/Shiny";
import styles from "./styles.module.css";

const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(2);

  return `${month}.${day}.${year}`;
};

type Props = {
  children: Date;
  className?: string;
};

const Date = ({ children, className = "" }: Props) => (
  <div className={`${styles.root} ${className}`}>
    <Shiny>{formatDate(children)}</Shiny>
  </div>
);

export default Date;

import { ReactNode } from "react";
import styles from "./Details.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const List = ({ children, className = "" }: Props) => (
  <div className={`${styles.list} ${className}`}>{children}</div>
);

export default List;

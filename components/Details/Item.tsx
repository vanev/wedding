import { ReactNode } from "react";
import styles from "./Details.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const Item = ({ children, className = "" }: Props) => (
  <div className={`${styles.item} ${className}`}>{children}</div>
);

export default Item;

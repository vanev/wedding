import { ReactNode } from "react";
import styles from "./Details.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const Body = ({ children, className = "" }: Props) => (
  <p className={`${styles.body} ${className}`}>{children}</p>
);

export default Body;

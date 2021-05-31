import { ReactNode } from "react";
import styles from "./Details.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className = "" }: Props) => (
  <p className={`${styles.header} ${className}`}>{children}</p>
);

export default Header;

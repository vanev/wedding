import { ReactNode } from "react";
import styles from "./Link.module.css";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

const Link = ({ children, href, className = "" }: Props) => (
  <a href={href} className={`${styles.root} ${className}`}>
    {children}
  </a>
);

export default Link;

import { ReactNode } from "react";
import NextLink from "next/link";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

const Link = ({ children, href, className = "" }: Props) => (
  <NextLink href={href}>
    <a className={`${styles.root} ${className}`}>{children}</a>
  </NextLink>
);

export default Link;

import NextLink from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Page = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export const Title = ({ children }: Props) => (
  <h1 className={styles.title}>{children}</h1>
);

export const Content = ({ children }: Props) => (
  <div className={styles.content}>{children}</div>
);

export const Header = ({ children }: Props) => (
  <h3 className={styles.header}>{children}</h3>
);

export const Body = ({ children }: Props) => (
  <p className={styles.body}>{children}</p>
);

type LinkProps = {
  children: ReactNode;
  href: string;
};

export const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href}>
    <a className={styles.link}>{children}</a>
  </NextLink>
);

export default Page;

import { HTMLAttributes, ReactNode } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  as?:
    | "a"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span"
    | "strong"
    | "li";
  className?: string;
  children: ReactNode;
  href?: string;
  htmlFor?: string;
}

const BodyText = ({
  as: As = "span",
  className = "",
  children,
  ...rest
}: Props) => {
  return (
    <As className={classnames(styles.root, className)} {...rest}>
      {children}
    </As>
  );
};

export default BodyText;

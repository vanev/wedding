import { HTMLAttributes, useRef, ReactNode } from "react";
import classnames from "classnames";
import useBackgroundPosition from "./useBackgroundPosition";
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
    | "p"
    | "span"
    | "strong";
  className?: string;
  children: ReactNode;
}

const Shiny = ({
  as: As = "span",
  className = "",
  children,
  ...rest
}: Props) => {
  const ref = useRef(null);
  const [x, y] = useBackgroundPosition(ref);

  return (
    <As
      className={classnames(styles.root, className)}
      style={{ backgroundPositionX: x, backgroundPositionY: y }}
      ref={ref}
      {...rest}
    >
      {children}
    </As>
  );
};

export default Shiny;

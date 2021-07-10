import { ButtonHTMLAttributes, useRef } from "react";
import classnames from "classnames";
import useBackgroundPosition from "../Text/Shiny/useBackgroundPosition";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ className = "", children, ...rest }: Props) => {
  const ref = useRef(null);
  const [x, y] = useBackgroundPosition(ref);

  return (
    <button
      className={classnames(styles.root, className)}
      style={{ backgroundPositionX: x, backgroundPositionY: y }}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

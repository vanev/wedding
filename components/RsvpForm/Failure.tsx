import * as Form from "../../lib/Form";
import Button from "../Button";
import Values from "./Values";
import styles from "./styles.module.css";

type Props = {
  state: Form.State.Failure<Values>;
};

const Failure = ({ state }: Props) => (
  <div className={styles.form}>
    <p className={styles.message}>
      Uh oh, something went <strong>wrong</strong>
    </p>

    <Button className={styles.button} type="button" onClick={state.reset}>
      Try Again
    </Button>
  </div>
);

export default Failure;

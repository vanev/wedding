import * as Form from "../../lib/Form";
import Values from "./Values";
import styles from "./styles.module.css";

type Props = {
  state: Form.State.Submitting<Values>;
};

const Submitting = ({ state }: Props) => {
  return (
    <div className={styles.form}>
      <p className={styles.message}>
        Sending RSVP for <strong>{state.values.guest.name}</strong>
      </p>
    </div>
  );
};

export default Submitting;

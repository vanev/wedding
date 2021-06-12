import * as Form from "../../../lib/Form";
import Button from "../../Button";
import EventDetails from "../../EventDetails";
import Values from "../Values";
import styles from "../styles.module.css";

type Props = {
  state: Form.State.Success<Values>;
};

const Attending = ({ state }: Props) => (
  <div className={styles.form}>
    <p className={styles.message}>
      See <strong>you</strong> there
    </p>

    <EventDetails className={styles.details} />

    <Button className={styles.button} type="button" onClick={state.reset}>
      RSVP for Someone Else
    </Button>
  </div>
);

export default Attending;

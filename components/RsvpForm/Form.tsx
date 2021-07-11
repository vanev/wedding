import { toArray } from "fp-ts/lib/Set";
import { FormEventHandler } from "react";
import * as Form from "../../lib/Form";
import Guest, { Ord as GuestOrd } from "../../lib/Guest";
import Button from "../Button";
import Values from "./Values";
import GuestField from "./GuestField";
import RsvpField from "./RsvpField";
import styles from "./styles.module.css";
import Body from "../Text/Body";

type Props = {
  guests: Set<Guest>;
  state: Form.State.Complete<Values> | Form.State.Incomplete<Values>;
};

const FormComponent = ({ guests, state }: Props) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (Form.State.isComplete(state)) state.submit();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Body as="p" className={styles.note}>
        Please RSVP for one guest at a time.
      </Body>

      <GuestField
        className={styles.field}
        guests={toArray(GuestOrd)(guests)}
        onChange={(value) => state.update("guest", value)}
        value={state.values.guest}
      />

      <RsvpField
        className={styles.field}
        onChange={(value) => state.update("rsvp", value)}
        value={state.values.rsvp}
      />

      <Button
        className={styles.button}
        disabled={!Form.State.isComplete(state)}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;

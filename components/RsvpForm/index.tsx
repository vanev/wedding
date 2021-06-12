import { FormEventHandler, useEffect } from "react";
import { toArray } from "fp-ts/lib/Set";
import { peopleTable } from "../../lib/Airtable";
import Guest, { Ord as GuestOrd } from "../../lib/Guest";
import * as Form from "../../lib/Form";
import useForm from "../../hooks/useForm";
import Button from "../Button";
import Values, { initial, validator } from "./Values";
import GuestField from "./GuestField";
import RsvpField from "./RsvpField";
import styles from "./styles.module.css";
import EventDetails from "../EventDetails";

const onFormSubmit = (values: Values): Promise<unknown> =>
  peopleTable().update(values.guest.id, { RSVP: values.rsvp });

type Props = {
  guests: Set<Guest>;
  onSuccess?: (values: Values) => unknown;
};

const RsvpForm = ({ guests, onSuccess = () => {} }: Props) => {
  const state = useForm<Values>(initial, validator, onFormSubmit);

  useEffect(() => {
    if (Form.State.isSuccess(state)) onSuccess(state.values);
  }, [state._tag]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (Form.State.isComplete(state)) state.submit();
  };

  switch (state._tag) {
    case "Incomplete":
    case "Complete":
      return (
        <form className={styles.form} onSubmit={onSubmit}>
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

    case "Submitting":
      return (
        <div className={styles.form}>
          <p className={styles.message}>
            Sending RSVP for <strong>{state.values.guest.name}</strong>
          </p>
        </div>
      );

    case "Success":
      return state.values.rsvp === "Attending" ? (
        <div className={styles.form}>
          <p className={styles.message}>
            See <strong>you</strong> there
          </p>

          <EventDetails className={styles.details} />

          <Button className={styles.button} type="button" onClick={state.reset}>
            RSVP for Someone Else
          </Button>
        </div>
      ) : (
        <div className={styles.form}>
          <p className={styles.message}>
            <strong>Sorry</strong> you can't make it
          </p>

          <Button className={styles.button} type="button" onClick={state.reset}>
            RSVP for Someone Else
          </Button>
        </div>
      );

    case "Failure":
      return (
        <div className={styles.form}>
          <p className={styles.message}>
            Uh oh, something went <strong>wrong</strong>
          </p>

          <Button className={styles.button} type="button" onClick={state.reset}>
            Try Again
          </Button>
        </div>
      );
  }
};

export default RsvpForm;

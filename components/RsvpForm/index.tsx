import { FormEventHandler, useEffect } from "react";
import { toArray } from "fp-ts/lib/Set";
import { peopleTable } from "../../lib/Airtable";
import Guest, { Ord as GuestOrd } from "../../lib/Guest";
import useForm from "../../hooks/useForm";
import Values, { initial, validator } from "./Values";
import GuestField from "./GuestField";
import RsvpField from "./RsvpField";
import styles from "./styles.module.css";

const onFormSubmit = (values: Values): Promise<unknown> =>
  peopleTable().update(values.guest.id, { RSVP: values.rsvp });

type Props = {
  guests: Set<Guest>;
  onSuccess?: (values: Values) => unknown;
};

const RsvpForm = ({ guests, onSuccess = () => {} }: Props) => {
  const [formState, updater, submit, reset] = useForm<Values>(
    initial,
    validator,
    onFormSubmit,
  );

  useEffect(() => {
    if (formState._tag === "Success") {
      onSuccess(formState.values);
    }
  }, [formState._tag]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    submit();
  };

  switch (formState._tag) {
    case "Incomplete":
    case "Complete":
      return (
        <form className={styles.form} onSubmit={onSubmit}>
          <GuestField
            className={styles.field}
            guests={toArray(GuestOrd)(guests)}
            onChange={(value) => updater("guest", value)}
            value={formState.values.guest}
          />

          <RsvpField
            className={styles.field}
            onChange={(value) => updater("rsvp", value)}
            value={formState.values.rsvp}
          />

          <button
            className={styles.button}
            disabled={formState._tag !== "Complete"}
            type="submit"
          >
            Submit
          </button>
        </form>
      );

    case "Submitting":
      return (
        <div className={styles.form}>
          <p className={styles.message}>
            Sending RSVP for {formState.values.guest.name}...
          </p>
        </div>
      );

    case "Success":
      return (
        <div className={styles.form}>
          <p className={styles.message}>RSVP Sent Successfully!</p>

          <button className={styles.button} type="button" onClick={reset}>
            RSVP for Someone Else
          </button>
        </div>
      );

    case "Failure":
      return (
        <div className={styles.form}>
          <p className={styles.message}>Uh oh, something went wrong!</p>

          <button className={styles.button} type="button" onClick={reset}>
            Try Again
          </button>
        </div>
      );
  }
};

export default RsvpForm;

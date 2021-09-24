import { useEffect } from "react";
import { peopleTable } from "../../lib/Airtable";
import Guest from "../../lib/Guest";
import * as Form from "../../lib/Form";
import useForm from "../../hooks/useForm";
import Values, { initial, validator } from "./Values";
import FormComponent from "./Form";
import Submitting from "./Submitting";
import Success from "./Success";
import Failure from "./Failure";

const onFormSubmit = (values: Values): Promise<unknown> =>
  peopleTable().update(values.guest.id, {
    RSVP: values.rsvp,
    "Welcome RSVP": values.welcomeRsvp,
  });

type Props = {
  guests: Set<Guest>;
  onSuccess?: (values: Values) => unknown;
};

const RsvpForm = ({ guests, onSuccess = () => {} }: Props) => {
  const state = useForm<Values>(initial, validator, onFormSubmit);

  useEffect(() => {
    if (Form.State.isSuccess(state)) onSuccess(state.values);
  }, [state._tag]);

  switch (state._tag) {
    case "Incomplete":
    case "Complete":
      return <FormComponent guests={guests} state={state} />;

    case "Submitting":
      return <Submitting state={state} />;

    case "Success":
      return <Success state={state} />;

    case "Failure":
      return <Failure state={state} />;
  }
};

export default RsvpForm;

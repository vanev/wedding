import { useState } from "react";
import State, {
  incomplete,
  complete,
  success,
  failure,
  submitting,
  isComplete,
} from "../lib/Form/State";
import Validator from "../lib/Form/Validator";
import SubmitHandler from "../lib/Form/SubmitHandler";

type Updater<Values> = <Key extends keyof Values>(
  key: Key,
  value: Values[Key] | void,
) => void;

type Submitter<Values> = () => void;

type Resetter<Values> = () => void;

const useForm = <Values>(
  initialValues: Partial<Values>,
  validator: Validator<Values>,
  onSubmit: SubmitHandler<Values>,
): [State<Values>, Updater<Values>, Submitter<Values>, Resetter<Values>] => {
  const [state, setState] = useState<State<Values>>(incomplete(initialValues));

  const updater: Updater<Values> = (key, value) => {
    const updatedValues: Partial<Values> = { ...state.values, [key]: value };

    if (validator(updatedValues)) {
      setState(complete(updatedValues));
    } else {
      setState(incomplete(updatedValues));
    }
  };

  const submitter: Submitter<Values> = () => {
    if (!isComplete(state)) return;

    setState(submitting(state.values));

    onSubmit(state.values)
      .then(success(state.values))
      .catch(failure(state.values))
      .then(setState);
  };

  const resetter: Resetter<Values> = () => {
    setState(incomplete(initialValues));
  };

  return [state, updater, submitter, resetter];
};

export default useForm;

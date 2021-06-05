import { useState } from "react";

type Incomplete<V> = {
  _tag: "Incomplete";
  values: Partial<V>;
};

export const incomplete = <V>(values: Partial<V>): Incomplete<V> => ({
  _tag: "Incomplete",
  values,
});

type Complete<V> = {
  _tag: "Complete";
  values: V;
};

export const complete = <V>(values: V): Complete<V> => ({
  _tag: "Complete",
  values,
});

type Submitting<V> = {
  _tag: "Submitting";
  values: V;
};

export const submitting = <V>(values: V): Submitting<V> => ({
  _tag: "Submitting",
  values,
});

type Success<V> = {
  _tag: "Success";
  values: V;
  response: unknown;
};

export const success =
  <V>(values: V) =>
  (response: unknown): Success<V> => ({
    _tag: "Success",
    values,
    response,
  });

type Failure<V> = {
  _tag: "Failure";
  values: V;
  error: Error;
};

export const failure =
  <V>(values: V) =>
  (error: Error): Failure<V> => ({
    _tag: "Failure",
    values,
    error,
  });

type State<V> =
  | Incomplete<V>
  | Complete<V>
  | Submitting<V>
  | Success<V>
  | Failure<V>;

type Validator<Values> = (values: Partial<Values>) => values is Values;

type SubmitHandler<Values> = (values: Values) => Promise<unknown>;

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
  const initialState = incomplete(initialValues);
  const [state, setState] = useState<State<Values>>(initialState);

  const updater: Updater<Values> = (key, value) => {
    const updatedValues: Partial<Values> = { ...state.values, [key]: value };

    if (validator(updatedValues)) {
      setState(complete(updatedValues));
    } else {
      setState(incomplete(updatedValues));
    }
  };

  const submitter: Submitter<Values> = () => {
    if (state._tag !== "Complete") return;

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

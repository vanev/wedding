import Reset from "./Reset";
import Submit from "./Submit";
import Update from "./Update";

export type Incomplete<V> = {
  _tag: "Incomplete";
  reset: Reset<V>;
  update: Update<V>;
  values: Partial<V>;
};
export const incomplete =
  <V>(reset: Reset<V>) =>
  (update: Update<V>) =>
  (values: Partial<V>): Incomplete<V> => ({
    _tag: "Incomplete",
    reset,
    update,
    values,
  });

export type Complete<V> = {
  _tag: "Complete";
  reset: Reset<V>;
  submit: Submit<V>;
  update: Update<V>;
  values: V;
};
export const complete =
  <V>(reset: Reset<V>) =>
  (update: Update<V>) =>
  (submit: Submit<V>) =>
  (values: V): Complete<V> => ({
    _tag: "Complete",
    reset,
    submit,
    update,
    values,
  });

export type Submitting<V> = {
  _tag: "Submitting";
  values: V;
};
export const submitting = <V>(values: V): Submitting<V> => ({
  _tag: "Submitting",
  values,
});

export type Success<V> = {
  _tag: "Success";
  reset: Reset<V>;
  response: unknown;
  values: V;
};
export const success =
  <V>(reset: Reset<V>) =>
  (values: V) =>
  (response: unknown): Success<V> => ({
    _tag: "Success",
    reset,
    response,
    values,
  });

export type Failure<V> = {
  _tag: "Failure";
  reason: unknown;
  reset: Reset<V>;
  values: V;
};
export const failure =
  <V>(reset: Reset<V>) =>
  (values: V) =>
  (reason: unknown): Failure<V> => ({
    _tag: "Failure",
    reason,
    reset,
    values,
  });

export type State<V> =
  | Incomplete<V>
  | Complete<V>
  | Submitting<V>
  | Success<V>
  | Failure<V>;

export const isIncomplete = <V>(state: State<V>): state is Incomplete<V> =>
  state._tag === "Incomplete";
export const isComplete = <V>(state: State<V>): state is Complete<V> =>
  state._tag === "Complete";
export const isSubmitting = <V>(state: State<V>): state is Submitting<V> =>
  state._tag === "Submitting";
export const isSuccess = <V>(state: State<V>): state is Success<V> =>
  state._tag === "Success";
export const isFailure = <V>(state: State<V>): state is Failure<V> =>
  state._tag === "Failure";

export function getValues<V>(state: Incomplete<V>): Partial<V>;
export function getValues<V>(state: Complete<V>): V;
export function getValues<V>(state: Submitting<V>): V;
export function getValues<V>(state: Success<V>): V;
export function getValues<V>(state: Failure<V>): V;
export function getValues<V>(state: State<V>) {
  return state.values;
}

export const getResponse = <V>(state: Success<V>): unknown => state.response;

export const getReason = <V>(state: Failure<V>): unknown => state.reason;

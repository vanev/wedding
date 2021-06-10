export type Incomplete<V> = {
  _tag: "Incomplete";
  values: Partial<V>;
};
export const incomplete = <V>(values: Partial<V>): Incomplete<V> => ({
  _tag: "Incomplete",
  values,
});

export type Complete<V> = {
  _tag: "Complete";
  values: V;
};
export const complete = <V>(values: V): Complete<V> => ({
  _tag: "Complete",
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

export type Failure<V> = {
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

export const getError = <V>(state: Failure<V>): Error => state.error;

export default State;

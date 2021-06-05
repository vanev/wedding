import { isOutOfBound } from "fp-ts/lib/Array";

export type Active = {
  _tag: "Active";
  query: string;
  selectedIndex: number;
};

export const active = (query: string, selectedIndex: number = -1): Active => ({
  _tag: "Active",
  query,
  selectedIndex,
});

export const incrementIndex =
  (results: Array<unknown>) =>
  ({ query, selectedIndex }: Active): Active => {
    let newIndex = selectedIndex + 1;
    if (isOutOfBound(newIndex, results)) {
      newIndex = selectedIndex;
    }
    return active(query, newIndex);
  };

export const decrementIndex =
  (results: Array<unknown>) =>
  ({ query, selectedIndex }: Active): Active => {
    let newIndex = selectedIndex - 1;
    if (isOutOfBound(newIndex, results)) {
      newIndex = selectedIndex;
    }
    return active(query, newIndex);
  };

export type Inactive = {
  _tag: "Inactive";
};

export const inactive: Inactive = {
  _tag: "Inactive",
};

type State = Active | Inactive;

export default State;

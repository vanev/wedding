import { isNonEmpty } from "fp-ts/lib/Array";
import Fuse from "fuse.js";
import Guest from "../../../lib/Guest";

type NoMatch = {
  _tag: "NoMatch";
  query: string;
};

export const noMatch = (query: string): NoMatch => ({
  _tag: "NoMatch",
  query,
});

type ImperfectMatch = {
  _tag: "ImperfectMatch";
  query: string;
  guest: Guest;
};

export const imperfectMatch = (
  query: string,
  guest: Guest,
): ImperfectMatch => ({
  _tag: "ImperfectMatch",
  query,
  guest,
});

type PerfectMatch = {
  _tag: "PerfectMatch";
  query: string;
  guest: Guest;
};

export const perfectMatch = (query: string, guest: Guest): PerfectMatch => ({
  _tag: "PerfectMatch",
  query,
  guest,
});

export type Active = NoMatch | ImperfectMatch | PerfectMatch;

export const active = (
  query: string,
  results: Array<Fuse.FuseResult<Guest>>,
): Active => {
  if (!isNonEmpty(results)) return noMatch(query);

  const perfectMatches = results.filter(({ score }) => score && score < 0.02);

  if (perfectMatches.length === 1) {
    const { item } = perfectMatches[0];
    return perfectMatch(query, item);
  }

  if (query.length >= 5) {
    return imperfectMatch(query, results[0].item);
  }

  return noMatch(query);
};

export type Empty = {
  _tag: "Empty";
};

export const empty: Empty = {
  _tag: "Empty",
};

export type Suggestion = {
  _tag: "Suggestion";
  query: string;
  guest: Guest;
};

export const suggestion = (query: string, guest: Guest): Suggestion => ({
  _tag: "Suggestion",
  query,
  guest,
});

export type Inactive = Empty | Suggestion;

type State = Active | Inactive;

export const isNoMatch = (state: State): state is NoMatch =>
  state._tag === "NoMatch";

export const isImperfectMatch = (state: State): state is ImperfectMatch =>
  state._tag === "ImperfectMatch";

export const isPerfectMatch = (state: State): state is PerfectMatch =>
  state._tag === "PerfectMatch";

export const isActive = (state: State): state is Active =>
  isNoMatch(state) || isImperfectMatch(state) || isPerfectMatch(state);

export const isEmpty = (state: State): state is Empty => state._tag === "Empty";

export const isSuggestion = (state: State): state is Suggestion =>
  state._tag === "Suggestion";

export const isInactive = (state: State): state is Inactive =>
  isEmpty(state) || isSuggestion(state);

export default State;

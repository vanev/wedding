import { FieldSet, Record } from "airtable";
import { Either, left, right } from "fp-ts/lib/Either";
import { Eq as EqType, contramap as eqContramap } from "fp-ts/lib/Eq";
import { Ord as OrdType, contramap as ordContramap } from "fp-ts/lib/Ord";
import { Ord as StringOrd, Eq as StringEq } from "fp-ts/lib/string";

type Guest = {
  id: string;
  name: string;
};

export const fromRecord = (record: Record<FieldSet>): Either<Error, Guest> => {
  const name = record.get("Name");

  if (typeof name !== "string")
    return left(new Error("Cannot create Guest without name."));

  return right({
    id: record.id,
    name,
  });
};

export const getId = (guest: Guest): string => guest.id;

export const getName = (guest: Guest): string => guest.name;

export const Eq: EqType<Guest> = eqContramap(getId)(StringEq);

export const Ord: OrdType<Guest> = ordContramap(getName)(StringOrd);

export default Guest;

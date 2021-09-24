import Guest from "../../lib/Guest";

type RSVP = "Attending" | "Not Attending";

type Values = {
  guest: Guest;
  rsvp: RSVP;
  welcomeRsvp: RSVP;
};

export const initial: Partial<Values> = {};

const guestValidator = (value: Guest | void): value is Guest => !!value;

const rsvpValidator = (value: RSVP | void): value is RSVP =>
  value === "Attending" || value === "Not Attending";

export const validator = (values: Partial<Values>): values is Values =>
  guestValidator(values.guest) && rsvpValidator(values.rsvp);

export default Values;

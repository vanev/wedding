import { GetServerSideProps } from "next";
import Head from "next/head";
import { filter, map } from "fp-ts/lib/Array";
import { isRight } from "fp-ts/lib/Either";
import { fromArray, remove } from "fp-ts/lib/Set";
import { peopleTable } from "../lib/Airtable";
import Guest, { fromRecord, Eq as GuestEq } from "../lib/Guest";
import Page, { Title, Content, Header, Body, Link } from "../components/Page";
import RsvpForm from "../components/RsvpForm";
import Values from "../components/RsvpForm/Values";
import { useState } from "react";

type SuccessProps = {
  _tag: "Success";
  initialGuests: Array<Guest>;
};

const successProps = (initialGuests: Array<Guest>): SuccessProps => ({
  _tag: "Success",
  initialGuests,
});

type FailureProps = {
  _tag: "Failure";
  error: string;
};

const failureProps = (error: unknown): FailureProps => ({
  _tag: "Failure",
  error:
    error instanceof Error
      ? error.message
      : typeof error === "string"
      ? error
      : "Something went wrong.",
});

type Props = SuccessProps | FailureProps;

const Failure = ({ error }: FailureProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>RSVP | James-Siegel Wedding</title>

        <meta
          name="description"
          content="Evan Siegel & Lindsey James Wedding"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Title>RSVP</Title>

        <Content>
          <Header>Uh Oh...</Header>

          <Body>{error}</Body>
        </Content>
      </Page>
    </>
  );
};

const Success = ({ initialGuests }: SuccessProps) => {
  const [guests, setGuests] = useState<Set<Guest>>(
    fromArray(GuestEq)(initialGuests),
  );

  const onRsvpFormSuccess = ({ guest }: Values) => {
    setGuests(remove(GuestEq)(guest));
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>RSVP | James-Siegel Wedding</title>

        <meta
          name="description"
          content="Evan Siegel & Lindsey James Wedding"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Link href="/">
          Back <strong>Home</strong>
        </Link>

        <Title>RSVP</Title>

        <Content>
          <RsvpForm guests={guests} onSuccess={onRsvpFormSuccess} />
        </Content>
      </Page>
    </>
  );
};

const Rsvp = (props: Props) => {
  switch (props._tag) {
    case "Failure":
      return <Failure {...props} />;

    case "Success":
      return <Success {...props} />;
  }
};

const fetchUnknownRSVPGuests = () =>
  peopleTable()
    .select({ view: "RSVP: Unknown", filterByFormula: "{Tier}='A'" })
    .all()
    .then((records) => records.map(fromRecord))
    .then(filter(isRight))
    .then(map((r) => r.right));

export const getServerSideProps: GetServerSideProps<Props> = (context) =>
  fetchUnknownRSVPGuests()
    .then(successProps)
    .catch(failureProps)
    .then((props) => ({ props }));

export default Rsvp;

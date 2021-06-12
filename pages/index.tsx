import Head from "next/head";
import DateDisplay from "../components/Date";
import Names from "../components/Names";
import Link from "../components/Link";
import EventDetails from "../components/EventDetails";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Evan Siegel & Lindsey James Are Getting Married</title>

        <meta
          name="description"
          content="Evan Siegel & Lindsey James Wedding"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/registry" className={styles.registry}>
          Check Out Our <strong>Registry</strong>
        </Link>

        <Link href="/rsvp" className={styles.rsvp}>
          <strong>RSVP</strong> Here
        </Link>

        <DateDisplay className={styles.date}>
          {new Date("12/11/21")}
        </DateDisplay>

        <Names
          names={["Evan Ferris Siegel", "Lindsey Ann James"]}
          className={styles.names}
        />

        <EventDetails className={styles.details} />
      </main>
    </>
  );
};

export default Home;

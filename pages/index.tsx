import Head from "next/head";
import DateDisplay from "../components/Date";
import Names from "../components/Names";
import Link from "../components/Link";
import * as Details from "../components/Details";
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

        <Details.List className={styles.details}>
          <Details.Item>
            <Details.Header>
              Saturday December 11<sup>th</sup> 2021
            </Details.Header>
            <Details.Body>6:00 in the Evening</Details.Body>
          </Details.Item>

          <Details.Item>
            <Details.Header>Brooklyn Winery</Details.Header>
            <Details.Body>
              213 N 8<sup>th</sup> Street Brooklyn New York
            </Details.Body>
          </Details.Item>

          <Details.Item>
            <Details.Header>Formal Attire</Details.Header>
            <Details.Body>Dinner & Dancing to Follow</Details.Body>
          </Details.Item>
        </Details.List>
      </main>
    </>
  );
};

export default Home;

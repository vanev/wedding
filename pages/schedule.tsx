import Head from "next/head";
import Shiny from "../components/Text/Shiny";
import Body from "../components/Text/Body";
import GoogleMapImage from "../components/GoogleMapImage";
import Page, { Title, Content, Link } from "../components/Page";
import styles from "../styles/Schedule.module.css";

const Schedule = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Schedule | James-Siegel Wedding</title>

      <meta name="description" content="Evan Siegel & Lindsey James Wedding" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Page>
      <Link href="/">
        Back <strong>Home</strong>
      </Link>

      <Title>The Weekend</Title>

      <Content>
        <div className={styles.day}>
          <Shiny as="p" className={styles.title}>
            Friday, December 10th
          </Shiny>

          <div className={styles.event}>
            <Body as="p" className={styles.detail}>
              <strong>Welcome Drinks</strong>
              <br />
              7:00 – 9:00PM
            </Body>

            <Body as="p" className={styles.detail}>
              Wine, Beer, + Lite Pizza Fare
            </Body>

            <Body as="p" className={styles.detail}>
              Dress Code: Office Holiday Party Chic
            </Body>

            <Body
              as="a"
              href="https://goo.gl/maps/mscCpo6RFemh7QRq8"
              className={styles.location}
            >
              Tuffet
              <br />
              286 Graham Ave, Brooklyn, NY 11211
            </Body>

            <GoogleMapImage
              address={{
                latitude: 40.712280452305706,
                longitude: -73.94384747901033,
              }}
              className={styles.map}
            />
          </div>
        </div>

        <div className={styles.day}>
          <Shiny as="p" className={styles.title}>
            Saturday, December 11th
          </Shiny>

          <div className={styles.event}>
            <Body as="p" className={styles.detail}>
              <strong>Ceremony</strong>
              <br />
              6:00PM
              <br />
              <em>Please arrive between 5:30 and 5:45</em>
            </Body>
          </div>

          <div className={styles.event}>
            <Body as="p" className={styles.detail}>
              <strong>Cocktails, Dinner, & Dancing</strong>
              <br />
              To Follow
            </Body>

            <Body
              as="a"
              href="https://goo.gl/maps/TZLgL6f2gpgK3vR48"
              className={styles.location}
            >
              Brooklyn Winery
              <br />
              213 N 8th St, Brooklyn, NY 11211
            </Body>

            <GoogleMapImage
              address={{
                latitude: 40.7174744442886,
                longitude: -73.95512647340928,
              }}
              className={styles.map}
            />
          </div>

          <div className={styles.event}>
            <Body as="p" className={styles.detail}>
              <strong>After Party</strong>
            </Body>

            <Body as="p" className={styles.detail}>
              11:00PM Until Late
            </Body>

            <Body
              as="a"
              href="https://goo.gl/maps/yVJ1MBHiu1CrFdG36"
              className={styles.location}
            >
              Beats Karaoke
              <br />
              219 Grand St, Brooklyn, NY 11211
            </Body>

            <GoogleMapImage
              address={{
                latitude: 40.71392821497226,
                longitude: -73.95959357318677,
              }}
              className={styles.map}
            />
          </div>
        </div>
      </Content>
    </Page>
  </>
);

export default Schedule;

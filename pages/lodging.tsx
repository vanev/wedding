import Head from "next/head";
import Hotel from "../lib/Hotel";
import Page, { Title, Content } from "../components/Page";
import HotelDisplay from "../components/Hotel";

const hotels: Array<Hotel> = [
  {
    name: "The Hoxton",
    url: "https://thehoxton.com/williamsburg/",
    address: {
      street: "97 Wythe Avenue",
      neighborhood: "Williamsburg",
      city: "Brooklyn",
      state: "NY",
      zip: "11249",
      phone: "718 215 7100",
      latitude: 40.72100986889597,
      longitude: -73.95874957256,
    },
    description: (
      <>
        We're happy to offer a <strong>10%</strong> discount on rooms with the
        code <strong>HITCHED1221</strong>. The quicker you book, the better.
        This is our favorite hotel in the city, with an almost-too-chic lobby
        and a rooftop with movie magic views of the Manhattan skyline. Please
        note, as is New York's way, the rooms are <em>quite</em> snug, but the
        decor and energy definitely make up for it.
      </>
    ),
    distances: [
      <>
        20 minute taxi from <strong>LGA</strong>
      </>,
      <>
        30-45 minute taxi from <strong>JFK</strong>
      </>,
      <>
        5 minute taxi or 10 minute walk from <strong>Brooklyn Winery</strong>
      </>,
    ],
  },
  {
    name: "The Williamsburg Hotel",
    url: "https://reservations.travelclick.com/113732?RatePlanId=5264142",
    address: {
      street: "96 Wythe Avenue",
      neighborhood: "Williamsburg",
      city: "Brooklyn",
      state: "NY",
      zip: "11249",
      phone: "718 362 8100",
      latitude: 40.721634579564856,
      longitude: -73.958637228383,
    },
    description: (
      <>
        We're happy to offer a <strong>12%</strong> discount at this quirky
        central Williamsburg mainstay with a 2-night minimum. The rooms are a
        bit bigger here and they have a rooftop pool, but it will be December so
        that doesn't really sell you, does it? Anyway, please book through{" "}
        <a href="https://reservations.travelclick.com/113732?RatePlanId=5264142">
          this link
        </a>
        .
      </>
    ),
    distances: [
      <>
        20 minute taxi from <strong>LGA</strong>
      </>,
      <>
        30-45 minute taxi from <strong>JFK</strong>
      </>,
      <>
        5 minute taxi or 10 minute walk from <strong>Brooklyn Winery</strong>
      </>,
    ],
  },
  {
    name: "Hampton Inn & Suites",
    url: "https://www.hilton.com/en/hotels/nycbohx-hampton-brooklyn-downtown/",
    address: {
      street: "125 Flatbush Avenue Extension",
      neighborhood: "Downtown Brookyln",
      city: "Brooklyn",
      state: "NY",
      zip: "11201",
      phone: "718 875 8800",
      latitude: 40.695909239604894,
      longitude: -73.9839771860542,
    },
    description: (
      <>
        Located in Downtown Brooklyn on vibrant Flatbush Avenue, just steps away
        from the Barclays Center, Manhattan Bridge, and BQE.
      </>
    ),
    distances: [
      <>
        20 minute taxi from <strong>LGA</strong>
      </>,
      <>
        30-45 minute taxi from <strong>JFK</strong>
      </>,
      <>
        15 minute taxi from <strong>Brooklyn Winery</strong>
      </>,
    ],
  },
];

const Lodging = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Lodging | James-Siegel Wedding</title>

      <meta name="description" content="Evan Siegel & Lindsey James Wedding" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Page>
      <Title>Lodging</Title>

      <Content>
        {hotels.map((hotel) => (
          <HotelDisplay hotel={hotel} key={hotel.name} />
        ))}
      </Content>
    </Page>
  </>
);

export default Lodging;

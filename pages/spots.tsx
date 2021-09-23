import Head from "next/head";
import Shiny from "../components/Text/Shiny";
import Body from "../components/Text/Body";
import Page, { Title, Content, Link } from "../components/Page";
import styles from "../styles/Spots.module.css";
import Address from "../lib/Address";
import GoogleMapImage from "../components/GoogleMapImage";

type Spot = {
  name: string;
  url: string;
  mapUrl: string;
  description: string;
  address: Address;
};

type Section = {
  title: string;
  spots: Array<Spot>;
};

const sections: Array<Section> = [
  {
    title: "Coffee",
    spots: [
      {
        name: "Blue Bottle",
        url: "https://bluebottlecoffee.com/cafes/williamsburg",
        mapUrl: "https://goo.gl/maps/4xM5Q9DPT231tG5v8",
        description:
          "Because he loves her, Evan walks to the Park Slope location at least once a week to bring Lindsey a $6 coffee in bed. Perfect man. Try the New Orleans.",
        address: {
          street: "76 N 4th St Store A",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.717152683790474,
          longitude: -73.96097818666018,
        },
      },
      {
        name: "Sweatshop",
        url: "https://sweatshop.coffee/",
        mapUrl: "https://goo.gl/maps/xRwfQHQjNyg5HjJbA",
        description:
          "Located directly under Evan’s almost windowless Williamsburg one-bedroom apartment , this Australian coffee shop is known for having some of the best avocado toast and flat whites in all of Brooklyn. Too bad we didn’t know it when he lived there.",
        address: {
          street: "232 Metropolitan Ave",
          city: "Brooklyn",
          state: "NY",
          zip: "11211",
          phone: "",
          latitude: 40.715116416810865,
          longitude: -73.9597326578241,
        },
      },
    ],
  },
  {
    title: "Ladies Who Brunch",
    spots: [
      {
        name: "Cafe Mogador",
        url: "https://www.cafemogador.com/",
        mapUrl: "https://goo.gl/maps/zdksGwzH3hwqo2DE7",
        description:
          "When it comes to brunch, it’s pretty tough to beat this spot that’s been around for almost 40 years. The Moroccan style breakfast is Lindsey’s favorite, while Evan always—surprise—goes pancakes. Just be wary, they don’t take reservations.",
        address: {
          street: "133 Wythe Avenue",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.719961129142284,
          longitude: -73.9600844192024,
        },
      },
      {
        name: "Cafe Collette",
        url: "https://www.cafe-colette.com/",
        mapUrl: "https://goo.gl/maps/xqff7yxH1yP8jvcP9",
        description:
          "A very cool, vintage, Parisian vibe. Lindsey and Evan used to beg the hostess to seat them here almost every weekend. Let us know how it is!",
        address: {
          street: "79 Berry St",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.71989464593885,
          longitude: -73.95761440200478,
        },
      },
    ],
  },
  {
    title: "Wine & Dine",
    spots: [
      {
        name: "Fette Sau",
        url: "http://www.fettesaubbq.com/",
        mapUrl: "https://goo.gl/maps/6vdb5dp7ZVfJLVT49",
        description:
          "A true smorgasbord of meats. Some of the best BBQ in the city. If Lindsey didn’t have to fit in a wedding dress, she’d join you.",
        address: {
          street: "354 Metropolitan Ave",
          city: "Brooklyn",
          state: "NY",
          zip: "11211",
          phone: "",
          latitude: 40.71427471571515,
          longitude: -73.95646301734952,
        },
      },
      {
        name: "Samurai Mama",
        url: "https://www.samuraimama.com/",
        mapUrl: "https://goo.gl/maps/X2ytEo3NmtjKTEri9",
        description:
          "This spot was a favorite of Evan and Lindsey’s in cold weather. Do not sleep on the pork gyoza. In fact, get double.",
        address: {
          street: "205 Grand St",
          city: "Brooklyn",
          state: "NY",
          zip: "11211",
          phone: "",
          latitude: 40.71438698319146,
          longitude: -73.96017957502187,
        },
      },
      {
        name: "Diner",
        url: "https://www.dinernyc.com/",
        mapUrl: "https://goo.gl/maps/QXouVaun2NUPtoRe9",
        description:
          "This restaurant in a refurbished dining car was the location of the first nice date Evan took Lindsey on. She was impressed, obviously.",
        address: {
          street: "85 Broadway",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.71090336346844,
          longitude: -73.96564388851336,
        },
      },
      {
        name: "Emmy Squared",
        url: "https://www.emmysquaredpizza.com/location/brooklyn-new-york/",
        mapUrl: "https://g.page/emmy-squared---brooklyn",
        description:
          "These square Detroit-style pizzas are seriously so good, it’s messed-up. Evan and Lindsey would eat here every night if the world was different.",
        address: {
          street: "364 Grand St",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.71246214554875,
          longitude: -73.95561977131558,
        },
      },
    ],
  },
  {
    title: "Brooklyn Bar Scene",
    spots: [
      {
        name: "Ramona",
        url: "https://ramonabarnyc.com/",
        mapUrl: "https://goo.gl/maps/or69PYzm99wotUdz7",
        description:
          "If there was ever a weekend that calls for a cocktail, it’s this weekend. And, Ramona has the best.",
        address: {
          street: "113 Franklin St",
          city: "Brooklyn",
          state: "NY",
          zip: "11222",
          phone: "",
          latitude: 40.73049152460745,
          longitude: -73.95780148665983,
        },
      },
      {
        name: "Sunshine Laundromat",
        url: "https://sunshinelaundromat.com/",
        mapUrl: "https://goo.gl/maps/JsKkhpXX87skdsbc8",
        description:
          "A low key pin-ball bar behind a real-life laundromat. Work meets play meets the place where Evan has had a lot of his birthday parties. Discovered by Evan's in the know Dad. He's a connoisseur of obscure, yet fantastically cool, amazing haunts around Gotham!",
        address: {
          street: "860 Manhattan Ave",
          city: "Brooklyn",
          state: "NY",
          zip: "11222",
          phone: "",
          latitude: 40.72925354900858,
          longitude: -73.95374558851294,
        },
      },
      {
        name: "Skinny Dennis",
        url: "https://www.skinnydennisbar.com/",
        mapUrl: "https://goo.gl/maps/tHpzQaXApieb4RSy8",
        description:
          "Happy hour goes from noon until 7pm, so it’s dangerously easy to get very comfortable. Try Willie’s famous frozen coffee, but just one, otherwise we might not see you at the wedding.",
        address: {
          street: "152 Metropolitan Avenue",
          city: "Brooklyn",
          state: "NY",
          zip: "11211",
          phone: "",
          latitude: 40.71589201542111,
          longitude: -73.96214365967717,
        },
      },
    ],
  },
  {
    title: "Make a Day of It",
    spots: [
      {
        name: "Brooklyn Museum",
        url: "https://www.brooklynmuseum.org/",
        mapUrl: "https://goo.gl/maps/QUZxZBfvq4WiPtn68",
        description:
          "With pay what you wish admission and seriously so much to see, the Brooklyn Museum is a great way to spend the day. It’s a bit out of the way (in South Brooklyn) but if you prefer a little culture (over beer), it’s worth the trip.",
        address: {
          street: "200 Eastern Pkwy",
          city: "Brooklyn",
          state: "NY",
          zip: "11238",
          phone: "",
          latitude: 40.671206179338654,
          longitude: -73.96363060139603,
        },
      },
      {
        name: "Brooklyn Brewery",
        url: "https://brooklynbrewery.com/",
        mapUrl: "https://goo.gl/maps/xzhpmH98JHVFC97K9",
        description:
          "Check out the tasting room to see what’s on tap. Spoiler—it’s beer. We’ve never been since beer’s not our thing, but don’t let that discourage you. We’ve heard this place is a ton of fun.",
        address: {
          street: "79 N 11th St",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.721738085607235,
          longitude: -73.95769787316853,
        },
      },
      {
        name: "Radegast Hall & Biergarten",
        url: "https://radegasthall.com/",
        mapUrl: "https://goo.gl/maps/eW3F4PMFiPn2G5er9",
        description:
          "A beer hall that is literally always buzzing. Live music happens every weekend and you can get steins of beer bigger than your head. Lindsey spent most of her early 20s here.",
        address: {
          street: "13 N 3rd St",
          city: "Brooklyn",
          state: "NY",
          zip: "11249",
          phone: "",
          latitude: 40.716580060645214,
          longitude: -73.96154596153019,
        },
      },
      {
        name: "Spritzenhaus33",
        url: "https://spritzenhaus33.com/",
        mapUrl: "https://goo.gl/maps/Cp5CeS7k3asR27Mv5",
        description:
          "This cozy beer hall is the best when it’s cold out. There’s always plenty of room at the big tables and plenty of big ass pretzels.",
        address: {
          street: "33 Nassau Ave",
          city: "Brooklyn",
          state: "NY",
          zip: "11222",
          phone: "",
          latitude: 40.72328164827947,
          longitude: -73.95265737316856,
        },
      },
      {
        name: "The Royal Palms ShuffleBoard Club",
        url: "https://www.royalpalmsbrooklyn.com/",
        mapUrl: "https://goo.gl/maps/4DENoAQNNn3r4ea77",
        description:
          "A rotating food truck, tropical drinks (in December? Yes please) and, according to them, “10 glorious, butter-smooth, regulation-size shuffleboard courts.” We love this spot. Enjoy.",
        address: {
          street: "514 Union St",
          city: "Brooklyn",
          state: "NY",
          zip: "11215",
          phone: "",
          latitude: 40.67880030927663,
          longitude: -73.98700636153116,
        },
      },
    ],
  },
];

const Spots = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Our Spots | James-Siegel Wedding</title>

      <meta name="description" content="Evan Siegel & Lindsey James Wedding" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Page>
      <Link href="/">
        Back <strong>Home</strong>
      </Link>

      <Title>Our Spots</Title>

      <Content>
        <div className={styles.introduction}>
          <Body as="p">
            The Hoxton, The Williamsburg Hotel, and The Wythe all have excellent
            bars and restaurants, and are all across the street from each other
            if you want to keep things simple.
          </Body>

          <Body as="p">
            If you want a little more complicated, check out our list below:
          </Body>
        </div>

        {sections.map((section) => (
          <section className={styles.section} key={section.title}>
            <Shiny as="h2" className={styles.title}>
              {section.title}
            </Shiny>

            {section.spots.map((spot) => (
              <div className={styles.spot} key={spot.name}>
                <div className={styles.details}>
                  <Body as="h3" className={styles.name}>
                    <strong>{spot.name}</strong>
                  </Body>

                  <Body as="p" className={styles.address}>
                    {spot.address.street}, {spot.address.city},{" "}
                    {spot.address.state} {spot.address.zip}
                  </Body>

                  <Body as="p" className={styles.description}>
                    {spot.description}
                  </Body>
                </div>

                <a className={styles.map} href={spot.mapUrl}>
                  <GoogleMapImage address={spot.address} />
                </a>
              </div>
            ))}
          </section>
        ))}
      </Content>
    </Page>
  </>
);

export default Spots;

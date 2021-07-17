import HotelType from "../../lib/Hotel";
import Shiny from "../Text/Shiny";
import Body from "../Text/Body";
import Address from "../Address";
import styles from "./styles.module.css";
import GoogleMapImage from "../GoogleMapImage";

type Props = {
  hotel: HotelType;
};

const Hotel = ({ hotel }: Props) => (
  <div className={styles.root}>
    <Shiny as="h2" className={styles.name}>
      <a href={hotel.url} target="_blank">
        {hotel.name}
      </a>
    </Shiny>

    <Body as="p" className={styles.description}>
      {hotel.description}
    </Body>

    <div className={styles.location}>
      <GoogleMapImage address={hotel.address} className={styles.map} />

      <Address
        address={hotel.address}
        url={hotel.url}
        className={styles.address}
      />

      <ul className={styles.distances}>
        {hotel.distances.map((distance, index) => (
          <Body key={index} as="li" className={styles.distance}>
            {distance}
          </Body>
        ))}
      </ul>
    </div>
  </div>
);

export default Hotel;

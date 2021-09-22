import classnames from "classnames";
import styles from "./styles.module.css";

type Props = {
  address: { latitude: number; longitude: number };
  className?: string;
};

const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
const size = [1000, 1000];

const baseOptions = {
  key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  size: size.join("x"),
};

const GoogleMapImage = ({ address, className = "" }: Props) => {
  const options = {
    ...baseOptions,
    center: [address.latitude, address.longitude].join(","),
    zoom: 16,
    map_id: "673a00c9f0b84ead",
    markers:
      "color:0x465956|" + [address.latitude, address.longitude].join(","),
  };

  const params = Object.entries(options)
    .map((entry) => entry.join("="))
    .join("&");

  const src = `${baseUrl}?${params}`;

  return <img className={classnames(styles.root, className)} src={src} />;
};

export default GoogleMapImage;

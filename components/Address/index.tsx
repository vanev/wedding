import AddressType from "../../lib/Address";
import Body from "../Text/Body";
import styles from "./styles.module.css";

type Props = {
  address: AddressType;
  className?: string;
};

const Address = ({ address, className = "" }: Props) => (
  <address className={`${styles.root} ${className}`}>
    <div className={styles.line}>
      <Body className={styles.street}>{address.street}</Body>
    </div>

    <div className={styles.line}>
      <Body className={styles.neighborhood}>{address.neighborhood}</Body>
      <Body className={styles.city}>{address.city}</Body>
      <Body className={styles.state}>{address.state}</Body>
      <Body className={styles.zip}>{address.zip}</Body>
    </div>

    <div className={styles.line}>
      <Body as="a" className={styles.phone} href={`tel:${address.phone}`}>
        {address.phone}
      </Body>
    </div>
  </address>
);

export default Address;

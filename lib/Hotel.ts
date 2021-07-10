import { ReactNode } from "react";
import Address from "./Address";

type Hotel = {
  name: string;
  url: string;
  address: Address;
  description: ReactNode;
  distances: Array<ReactNode>;
};

export default Hotel;

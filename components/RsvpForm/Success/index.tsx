import * as Form from "../../../lib/Form";
import Values from "../Values";
import Attending from "./Attending";
import NotAttending from "./NotAttending";

type Props = {
  state: Form.State.Success<Values>;
};

const Success = ({ state }: Props) => {
  switch (state.values.rsvp) {
    case "Attending":
      return <Attending state={state} />;

    case "Not Attending":
      return <NotAttending state={state} />;
  }
};

export default Success;

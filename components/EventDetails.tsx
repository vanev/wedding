import * as Details from "./Details";

type Props = {
  className?: string;
};

const EventDetails = ({ className = "" }: Props) => (
  <Details.List className={className}>
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
);

export default EventDetails;

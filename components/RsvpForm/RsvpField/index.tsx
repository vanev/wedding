import { ChangeEventHandler, ReactNode } from "react";
import Body from "../../Text/Body";
import styles from "./styles.module.css";

type Props = {
  className?: string;
  id: string;
  label: ReactNode;
  disabled?: boolean;
  onChange: (value: "Attending" | "Not Attending") => void;
  value: "Attending" | "Not Attending" | void;
};

const RsvpField = ({
  className = "",
  id,
  label,
  disabled = false,
  onChange,
  value,
}: Props) => {
  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (
      event.target.value === "Attending" ||
      event.target.value === "Not Attending"
    ) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`${styles.root} ${className}`}>
      <Body as="label" className={styles.label} htmlFor={id}>
        {label}
      </Body>

      <select
        className={styles.input}
        name={id}
        value={value || ""}
        onChange={handleSelectChange}
        disabled={disabled}
      >
        <option value="" disabled>
          Choose A Response
        </option>

        <option value="Attending">See You There</option>

        <option value="Not Attending">Can't Make It</option>
      </select>
    </div>
  );
};

export default RsvpField;

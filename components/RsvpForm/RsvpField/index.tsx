import styles from "./styles.module.css";

type Props = {
  className?: string;
  disabled?: boolean;
  onChange: (value: "Attending" | "Not Attending") => void;
  value: "Attending" | "Not Attending" | void;
};

const RsvpField = ({
  className = "",
  disabled = false,
  onChange,
  value,
}: Props) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.option}>
        <input
          className={styles.input}
          type="radio"
          name="rsvp"
          value="Attending"
          id="rsvp_attending"
          disabled={disabled}
          checked={value === "Attending"}
          onChange={() => onChange("Attending")}
        />
        <label className={styles.checkbox} htmlFor="rsvp_attending" />
        <label className={styles.label} htmlFor="rsvp_attending">
          See <strong>You</strong> There
        </label>
      </div>

      <div className={styles.option}>
        <input
          className={styles.input}
          type="radio"
          name="rsvp"
          value="Not Attending"
          id="rsvp_not_attending"
          disabled={disabled}
          checked={value === "Not Attending"}
          onChange={() => onChange("Not Attending")}
        />
        <label className={styles.checkbox} htmlFor="rsvp_not_attending" />
        <label className={styles.label} htmlFor="rsvp_not_attending">
          <strong>Can't</strong> Make It
        </label>
      </div>
    </div>
  );
};

export default RsvpField;

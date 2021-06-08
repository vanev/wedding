import {
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  ChangeEventHandler,
} from "react";
import classnames from "classnames";
import Guest from "../../../lib/Guest";
import useFuse from "../../../hooks/useFuse";
import State, {
  active,
  empty,
  isActive,
  isImperfectMatch,
  isInactive,
  isPerfectMatch,
  isSuggestion,
  noMatch,
  perfectMatch,
  suggestion,
} from "./State";
import styles from "./styles.module.css";
import useClickOutside from "../../../hooks/useClickOutside";
import ShinyText from "../../ShinyText";

type Props = {
  className?: string;
  disabled?: boolean;
  guests: Array<Guest>;
  onChange: (value: Guest | void) => void;
  value: Guest | void;
};

const GuestField = ({
  className = "",
  disabled = false,
  guests,
  onChange,
  value,
}: Props) => {
  const [state, setState] = useState<State>(empty);
  const fuse = useFuse(guests, ["name"]);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const blur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }

    if (isPerfectMatch(state)) {
      onChange(state.guest);
      setState(empty);
    } else if (isImperfectMatch(state)) {
      onChange(undefined);
      setState(suggestion(state.query, state.guest));
    } else if (isSuggestion(state)) {
      setState(suggestion(state.query, state.guest));
    } else {
      setState(empty);
    }
  };

  useClickOutside(rootRef, blur);

  const onInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    if (value) {
      setState(perfectMatch(value.name, value));
    } else if (isSuggestion(state)) {
      setState(active(state.query, fuse.search(state.query)));
    } else {
      setState(noMatch(""));
    }
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(active(event.target.value, fuse.search(event.target.value)));
  };

  const onSuggestionClick =
    (guest: Guest): MouseEventHandler<HTMLElement> =>
    (event) => {
      onChange(guest);
      setState(empty);
    };

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (isInactive(state)) return;

    switch (event.key) {
      case "Tab":
        event.preventDefault();
        blur();
        break;

      case "Enter":
        event.preventDefault();
        blur();
        break;

      default:
        break;
    }
  };

  let inputValue = "";
  switch (state._tag) {
    case "Empty":
      inputValue = value ? value.name : "";
      break;

    case "Suggestion":
    case "NoMatch":
    case "ImperfectMatch":
    case "PerfectMatch":
      inputValue = state.query;
      break;
  }

  const rootClassName = classnames(
    styles.root,
    {
      [styles.active]: isActive(state),
      [styles.hasValue]: !!value,
    },
    className,
  );

  return (
    <div className={rootClassName} ref={rootRef}>
      <label className={styles.label} htmlFor="guest_input">
        Name
      </label>

      <input
        className={styles.input}
        disabled={disabled}
        id="guest_input"
        onChange={onInputChange}
        onFocus={onInputFocus}
        onKeyDown={onInputKeyDown}
        ref={inputRef}
        value={inputValue}
      />

      {isPerfectMatch(state) ? (
        <ShinyText className={styles.shadow}>{state.guest.name}</ShinyText>
      ) : null}

      {isSuggestion(state) ? (
        <span className={styles.suggestion}>
          Did you mean{" "}
          <strong onClick={onSuggestionClick(state.guest)}>
            {state.guest.name}
          </strong>
          ?
        </span>
      ) : null}
    </div>
  );
};

export default GuestField;

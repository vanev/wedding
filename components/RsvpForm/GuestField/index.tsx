import {
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  ChangeEventHandler,
} from "react";
import { isOutOfBound } from "fp-ts/lib/Array";
import Guest from "../../../lib/Guest";
import useClickOutside from "../../../hooks/useClickOutside";
import useFuse from "../../../hooks/useFuse";
import State, {
  active,
  inactive,
  incrementIndex,
  decrementIndex,
} from "./State";
import styles from "./styles.module.css";

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
  const [state, setState] = useState<State>(inactive);
  const fuse = useFuse(guests, ["name"]);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(rootRef, (event) => setState(inactive));

  const onSuggestionClick =
    (guest: Guest): MouseEventHandler<HTMLElement> =>
    (event) => {
      onChange(guest);
      setState(inactive);
    };

  const onInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setState(active(value ? value.name : ""));
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(active(event.target.value));
  };

  const results = state._tag === "Active" ? fuse.search(state.query) : [];

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (state._tag === "Inactive") return;

    switch (event.key) {
      case "Tab":
        setState(inactive);
        break;

      case "ArrowDown": {
        event.preventDefault();
        setState(incrementIndex(results)(state));
        break;
      }

      case "ArrowUp": {
        event.preventDefault();
        setState(decrementIndex(results)(state));
        break;
      }

      case "Enter": {
        event.preventDefault();

        if (!isOutOfBound(state.selectedIndex, results)) {
          onChange(results[state.selectedIndex].item);
          setState(inactive);

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      }

      default:
        break;
    }
  };

  const onSuggestionMouseOver =
    (index: number): MouseEventHandler<HTMLLIElement> =>
    (event) => {
      if (state._tag === "Active") {
        setState(active(state.query, index));
      }
    };

  return (
    <div
      className={`${styles.root} ${
        styles[state._tag.toLowerCase()]
      } ${className}`}
      ref={rootRef}
    >
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
        value={state._tag === "Active" ? state.query : value ? value.name : ""}
      />

      {results.length > 0 ? (
        <ul className={styles.suggestions}>
          {results.slice(0, 1).map(({ item, score }, index) => (
            <li
              className={`${styles.suggestion} ${
                state._tag === "Active" && state.selectedIndex === index
                  ? styles.selected
                  : ""
              }`}
              key={item.id}
              onClick={onSuggestionClick(item)}
              onMouseOver={onSuggestionMouseOver(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default GuestField;

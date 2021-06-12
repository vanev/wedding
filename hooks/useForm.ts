import { useState, useCallback } from "react";
import State, {
  incomplete,
  complete,
  success,
  failure,
  submitting,
} from "../lib/Form/State";
import Submit from "../lib/Form/Submit";
import Reset from "../lib/Form/Reset";
import Update from "../lib/Form/Update";
import Validator from "../lib/Form/Validator";
import SubmitHandler from "../lib/Form/SubmitHandler";

const useForm = <Values>(
  initialValues: Partial<Values>,
  validator: Validator<Values>,
  onSubmit: SubmitHandler<Values>,
): State<Values> => {
  const [values, setValues] = useState<Partial<Values>>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [response, setResponse] = useState<unknown | null>(null);
  const [reason, setReason] = useState<unknown | null>(null);

  const reset: Reset<Values> = useCallback(() => {
    setValues(initialValues);
    setIsSubmitting(false);
    setResponse(null);
    setReason(null);
  }, [initialValues]);

  const update: Update<Values> = (key, value) =>
    setValues((values) => ({ ...values, [key]: value }));

  if (!validator(values)) {
    if (isSubmitting) throw new Error("Impossible State");
    if (response) throw new Error("Impossible State");
    if (reason) throw new Error("Impossible State");

    return incomplete<Values>(reset)(update)(values);
  }

  if (isSubmitting) {
    if (response) throw new Error("Impossible State");
    if (reason) throw new Error("Impossible State");

    return submitting<Values>(values);
  }

  if (response) {
    if (reason) throw new Error("Impossible State");

    return success<Values>(reset)(values)(response);
  }

  if (reason) {
    return failure<Values>(reset)(values)(reason);
  }

  const submit: Submit<Values> = () => {
    setIsSubmitting(true);

    onSubmit(values)
      .then((res) => {
        setResponse(res);
        setIsSubmitting(false);
      })
      .catch((reason) => {
        setReason(reason);
        setIsSubmitting(false);
      });
  };

  return complete<Values>(reset)(update)(submit)(values);
};

export default useForm;

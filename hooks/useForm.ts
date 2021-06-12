import { useState, useCallback } from "react";
import * as Form from "../lib/Form";
import * as RequestState from "../lib/RequestState";

const useForm = <Values>(
  initialValues: Partial<Values>,
  validator: Form.Validator<Values>,
  onSubmit: Form.SubmitHandler<Values>,
): Form.State.State<Values> => {
  const [values, setValues] = useState<Partial<Values>>(initialValues);
  const [submitRequest, setSubmitRequest] =
    useState<RequestState.RequestState | null>(null);

  const reset: Form.Reset<Values> = useCallback(() => {
    setValues(initialValues);
    setSubmitRequest(null);
  }, [initialValues]);

  const update: Form.Update<Values> = (key, value) =>
    setValues((values) => ({ ...values, [key]: value }));

  if (!validator(values)) {
    if (submitRequest) throw new Error("Impossible State");

    return Form.State.incomplete<Values>(reset)(update)(values);
  }

  if (submitRequest) {
    return RequestState.extract<Form.State.State<Values>>(
      () => Form.State.submitting<Values>(values),
      Form.State.success<Values>(reset)(values),
      Form.State.failure<Values>(reset)(values),
    )(submitRequest);
  }

  const submit: Form.Submit<Values> = () => {
    setSubmitRequest(RequestState.inProgress);

    onSubmit(values)
      .then(RequestState.complete)
      .catch(RequestState.failed)
      .then(setSubmitRequest);
  };

  return Form.State.complete<Values>(reset)(update)(submit)(values);
};

export default useForm;

type Validator<Values> = (values: Partial<Values>) => values is Values;

export default Validator;

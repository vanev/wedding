type Predicate<A> = (a: A) => boolean;

export const negate =
  <A>(p: Predicate<A>): Predicate<A> =>
  (a) =>
    !p(a);

export default Predicate;

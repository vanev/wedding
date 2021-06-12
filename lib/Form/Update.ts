type Update<V> = <K extends keyof V>(key: K, value: V[K] | void) => unknown;

export default Update;

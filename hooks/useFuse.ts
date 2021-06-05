import { useMemo } from "react";
import Fuse from "fuse.js";

const useFuse = <T>(list: Array<T>, keys: Array<Fuse.FuseOptionKey>) =>
  useMemo(() => {
    const options = {
      includeScore: true,
      keys,
    };

    return new Fuse(list, options);
  }, [list, keys]);

export default useFuse;

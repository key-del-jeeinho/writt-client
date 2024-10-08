import _ from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface DebouncedState<S> {
    raw: [S, Dispatch<SetStateAction<S>>]
    debounced: [S, Dispatch<SetStateAction<S>>]
}

export function useDebounceState<S>(
    initialState: S | (() => S),
    wait: number,
): DebouncedState<S> {
  const [raw, setRaw] = useState(initialState)
  const [debounced, setDebounced] = useState(raw)
  
  const updateDebounced = _.debounce((value) => { setDebounced(value) }, wait)

  useEffect(() => {
    updateDebounced(raw)
    return () => { updateDebounced.cancel() };
  }, [raw, updateDebounced])

  return {
    raw: [raw, setRaw],
    debounced: [debounced, setDebounced]
  }
}
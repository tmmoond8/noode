import React from 'react';

export function useDelay(milliSeconds: number) {
  const [done, setDone] = React.useReducer(() => true, false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDone();
    }, milliSeconds);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return done;
}

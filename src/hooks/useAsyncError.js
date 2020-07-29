import { useState, useCallback } from 'react';


const useAsyncError = () => {
  const [_, setError] = useState();
  return useCallback(
    err => {
      setError(() => {
        throw err;
      });
    },
    [setError],
  );
};

export default useAsyncError;
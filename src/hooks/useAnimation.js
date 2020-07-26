import { useState, useLayoutEffect } from 'react';

const useAnimation = initialValues => {
  const [transition, setTransition] = useState(initialValues);

  // useLayoutEffect set transition onOpen Modal
  useLayoutEffect(() => {
    setTimeout(() => {
      setTransition({opacity: 1})
    });
  }, []);

  return {transition, setTransition};
}

export default useAnimation;
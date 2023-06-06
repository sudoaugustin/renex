import { useLayoutEffect, useState } from 'react';

export default function useIsBrowser() {
  const [isBrowser, setBrowser] = useState(false);

  useLayoutEffect(() => {
    setBrowser(true);
  }, []);

  return isBrowser;
}

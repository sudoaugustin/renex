import { useEffect, useState } from 'react';

export default function useIsBrowser() {
  const [isBrowser, setBrowser] = useState(false);

  useEffect(() => {
    setBrowser(true);
  }, []);

  return isBrowser;
}

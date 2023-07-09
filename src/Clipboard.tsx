import { CProps } from '../types';
import { element } from './utils';
import { ReactNode, useEffect, useState } from 'react';

type Props = CProps & {
  timeout?: number;
  children: (clipboard: {
    text?: string;
    error?: Error;
    isCopied: boolean;
    read: Function;
    copy: (text: string) => void;
  }) => ReactNode;
  onError?: (error: Error) => void;
  onSuccess?: (text: string) => void;
};

export default function Clipboard({ type, children, timeout = 2000, onError, onSuccess, ...rest }: Props) {
  const [text, setText] = useState<string>();
  const [error, setError] = useState<Error>();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const $timeout = setTimeout(() => setIsCopied(false), timeout);
      return () => {
        clearTimeout($timeout);
      };
    }
  }, [isCopied]);

  const read = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then((text) => setText(text))
        .catch(handleError);
    } else {
      handleError(new Error("`navigator.clipboard` isn't supported"));
    }
  };

  const copy = (text: string) => {
    if (navigator.clipboard) {
      !isCopied &&
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setText(text);
            onSuccess?.(text);
            setIsCopied(true);
          })
          .catch(handleError);
    } else {
      handleError(new Error("`navigator.clipboard` isn't supported"));
    }
  };

  const handleError = (error: Error) => {
    setError(error);
    onError?.(error);
  };

  return element({ ...rest, children: children({ text, error, isCopied, read, copy }) });
}

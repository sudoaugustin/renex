import { element } from './utils';
import storage, { ActionProps, Props } from './utils/storage';
import { useSyncExternalStore } from 'react';

const { getItem, setItem, removeItem, subscriber, getServerSnap } = storage(false);

function LocalStorage<TState = string>({
  name,
  initial,
  children,
  serializer = JSON.stringify,
  deserializer = JSON.parse,
  ...rest
}: Props<TState>) {
  const value = useSyncExternalStore<null | string>(subscriber, () => getItem(name), getServerSnap);

  return element({
    ...rest,
    // Handle server-rendering and deserializing here to avoid useSyncExternalStore with immutable data.
    children: children(value === null ? initial : deserializer(value), setItem(name, serializer), () => removeItem(name)),
  });
}

function LocalStorageAction<TState = string>({ name, children, serializer = JSON.stringify, ...rest }: ActionProps<TState>) {
  return element({ ...rest, children: children(setItem(name, serializer), () => removeItem(name)) });
}

LocalStorage.Action = LocalStorageAction;

export default LocalStorage;

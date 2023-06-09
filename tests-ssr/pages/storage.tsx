import { Storage } from 'renex';

export default function Page() {
  return (
    <div>
      <Storage name='token'>{(token) => <div>{token}</div>}</Storage>
      <Storage name='token'>{(token, setToken) => <button onClick={() => setToken(Math.random().toString())}>Generate</button>}</Storage>
    </div>
  );
}

import { Storage } from 'renex';

export default function Page() {
  return (
    <div className='flex flex-col items-center'>
      <Storage as="div" name='token' className='pb-4 font-bold'>
        {(token) => <p>{token}</p>}
      </Storage>
      <Storage.Action name='token'>
        {(setToken) => (
          <button className='bg-sky-400 text-white px-4 py-2' onClick={() => setToken(Math.random().toString())}>
            Generate
          </button>
        )}
      </Storage.Action>
    </div>
  );
}

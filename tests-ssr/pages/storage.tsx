import { LocalStorage, SessionStorage } from 'renex';

export default function Page() {
  return (
    <div className='flex flex-col items-center'>
      <SessionStorage name='token'>{(token) => <p className='pb-4 font-bold'>{token}</p>}</SessionStorage>
      <LocalStorage name='token'>{(token) => <p className='pb-4 font-bold'>{token}</p>}</LocalStorage>
      <LocalStorage.Set name='token'>
        {(setToken) => (
          <button className='bg-sky-400 text-white px-4 py-2' onClick={() => setToken(Math.random().toString())}>
            Generate
          </button>
        )}
      </LocalStorage.Set>
    </div>
  );
}

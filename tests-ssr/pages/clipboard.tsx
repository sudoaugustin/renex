import { Clipboard } from 'renex';

export default function Page() {
  return (
    <Clipboard>
      {({ text = 'Nothing', isCopied, read, copy }) => (
        <button
          type='button'
          className={`px-4 py-2 text-white ${isCopied ? 'bg-green-600' : 'bg-gray-600'}`}
          onClick={() => copy('Everything')}
          onMouseEnter={() => read()}
        >
          {text}
        </button>
      )}
    </Clipboard>
  );
}

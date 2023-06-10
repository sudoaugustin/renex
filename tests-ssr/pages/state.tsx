import { State } from 'renex';

export default function Page() {
  return (
    <State as="div" initial={false}>
      {(isOpen, setOpen) => (
        <button
          onClick={() => setOpen((open) => !open)}
          className={`px-4 py-2 rounded-md uppercase ${isOpen ? 'bg-sky-400 text-white' : 'border border-sky-400 text-sky-400'}`}
        >
          {isOpen ? 'opened' : 'closed'}
        </button>
      )}
    </State>
  );
}

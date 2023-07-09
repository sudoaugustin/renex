import Link from 'next/link';

const components = ['State', 'Storage', 'Portal', 'Clipboard'];

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {components.map((component) => (
        <Link key={component} href={`/${component.toLowerCase()}`} className="font-bold block bg-sky-400 px-4 py-2 text-center text-white">
          {component}
        </Link>
      ))}
    </div>
  );
}

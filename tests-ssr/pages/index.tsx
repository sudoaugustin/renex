import Link from 'next/link';
import * as components from 'renex';

export default function Page() {
  return (
    <div className="space-y-4">
      {Object.keys(components).map((component) => (
        <Link key={component} href={`/${component.toLowerCase()}`} className="font-bold block bg-sky-400 px-4 py-2 text-center text-white">
          {component}
        </Link>
      ))}
    </div>
  );
}

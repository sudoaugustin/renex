import { Portal } from 'renex';

export default function Page() {
  return (
    <div className=''>
      <Portal as="h2" root='#root'>
        I'm portaled
      </Portal>
      <div id='root' className='bg-yellow-100 text-yellow-600 p-2' />
    </div>
  );
}

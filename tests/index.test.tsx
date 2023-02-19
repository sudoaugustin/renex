import * as components from '../src';
import { render } from '@testing-library/react';

const props = {
  Memo: { deps: [], children: '' },
  State: { initial: '', children: () => '' },
  Effect: { initial: '', children: () => '', callback: () => {} },
};

//@ts-ignore
const names: (keyof typeof props)[] = Object.keys(components);

names.forEach((name) => {
  test(`Check 'as' for ${name}`, async () => {
    const Component = components[name];

    //@ts-ignore
    expect(render(<Component as='' {...props[name]} />).container.innerHTML).toBe('');

    //@ts-ignore
    expect(render(<Component {...props[name]} />).container.innerHTML).toBe('<div></div>');

    //@ts-ignore
    expect(render(<Component as='p' {...props[name]} />).container.innerHTML).toBe('<p></p>');
  });
});

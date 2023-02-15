import State from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const user = userEvent.setup();

test('Check `as`', async () => {
  expect(
    render(
      <State as='' initial={false}>
        {() => (
          <State initial={false}>
            {() => (
              <State as='h1' initial={false}>
                {() => 'State'}
              </State>
            )}
          </State>
        )}
      </State>,
    ).container.innerHTML,
  ).toBe('<div><h1>State</h1></div>');
});

test('Check state', async () => {
  const { container } = render(
    <State initial="Bob">
      {(user, setUser) => (
        <p data-testid="user" onClick={() => setUser('Alice')}>
          {user}
        </p>
      )}
    </State>,
  );
  expect(container.textContent).toBe('Bob');
  await user.click(screen.getByTestId('user'));
  expect(container.textContent).toBe('Alice');
});

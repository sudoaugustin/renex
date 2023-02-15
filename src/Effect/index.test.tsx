import Effect from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const user = userEvent.setup();

test('Check `as`', async () => {
  expect(
    render(
      <Effect as='' initial={false} callback={() => {}}>
        {() => (
          <Effect initial={false} callback={() => {}}>
            {() => (
              <Effect as='h1' initial={false} callback={() => {}}>
                {() => 'Effect'}
              </Effect>
            )}
          </Effect>
        )}
      </Effect>,
    ).container.innerHTML,
  ).toBe('<div><h1>Effect</h1></div>');
});

test('Check state and effect', async () => {
  const { container } = render(
    <Effect
      initial="Bob"
      callback={(user) => {
        document.getElementById('user')?.setAttribute('data-name', user.toLocaleLowerCase());
      }}
    >
      {(user, setUser) => (
        <p id="user" data-testid="user" onClick={() => setUser('Alice')}>
          {user}
        </p>
      )}
    </Effect>,
  );
  const p = screen.getByTestId('user');

  expect(p.dataset.name).toBe('bob');
  expect(container.textContent).toBe('Bob');

  await user.click(screen.getByTestId('user'));

  expect(p.dataset.name).toBe('alice');
  expect(container.textContent).toBe('Alice');
});

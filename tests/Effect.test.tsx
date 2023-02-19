import { Effect } from '../src';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check Effect', async () => {
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

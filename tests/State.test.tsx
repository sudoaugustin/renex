import { State } from '../src';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check `State`', async () => {
  const { container, getByTestId } = render(
    <State initial="Bob">
      {(user, setUser) => (
        <p data-testid="user" onClick={() => setUser('Alice')}>
          {user}
        </p>
      )}
    </State>,
  );
  expect(container.textContent).toBe('Bob');

  await user.click(getByTestId('user'));

  expect(container.textContent).toBe('Alice');
});

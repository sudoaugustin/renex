import { Storage } from '../src';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check `Storage`', async () => {
  const initValue = 'OLD';
  const nextValue = 'NEW';

  localStorage.setItem('token', initValue);

  const { getByTestId } = render(
    <div>
      <Storage name='token'>
        {(_, setToken) => (
          <button type='submit' data-testid="update-btn" onClick={() => setToken(nextValue)}>
            Click Me
          </button>
        )}
      </Storage>
      <Storage as="p" name='token' data-testid="token">
        {(token) => token}
      </Storage>
    </div>,
  );
  expect(getByTestId('token').innerHTML).toBe(initValue);

  await user.click(getByTestId('update-btn'));

  expect(getByTestId('token').innerHTML).toBe(nextValue);
});

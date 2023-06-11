import { Storage } from '../src';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check `Storage`', async () => {
  const value = { name: 'Augustin' };

  const { getByTestId } = render(
    <div>
      <Storage.Action<typeof value> name='token'>
        {(setToken) => (
          <button type='submit' data-testid="update-btn" onClick={() => setToken(value)}>
            Click Me
          </button>
        )}
      </Storage.Action>
      <Storage<typeof value> as="p" name='token' data-testid="token">
        {(token) => token?.name}
      </Storage>
    </div>,
  );
  expect(getByTestId('token').innerHTML).toBe('');

  await user.click(getByTestId('update-btn'));

  expect(getByTestId('token').innerHTML).toBe(value.name);
});

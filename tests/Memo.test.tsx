import { Memo, State } from '../src';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check Memo', async () => {
  render(
    <State initial={{ name: 'alice', last_update: '2 min ago' }}>
      {(user, setUser) => (
        <div>
          <button
            data-testid="btn"
            onClick={() => setUser({ ...user, name: 'bob' })}
            onDoubleClick={() => setUser({ ...user, last_update: 'Just Now' })}
          />
          <Memo data-testid="link" deps={[user.last_update]} className={user.name}>
            domain.com/{user.name}
          </Memo>
        </div>
      )}
    </State>,
  );

  const btn = await screen.findByTestId('btn');
  const link = await screen.findByTestId('link');

  await user.click(btn);

  expect(link.className).toBe('alice');
  expect(link.textContent).toBe('domain.com/alice');

  await user.dblClick(btn);

  expect(link.className).toBe('bob');
  expect(link.textContent).toBe('domain.com/bob');
});

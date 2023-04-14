import { Memo, State } from '../src';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check Memo', async () => {
  const { getByTestId } = render(
    <State initial={{ name: 'alice', last_update: '2 min ago' }}>
      {(user, setUser) => (
        <div>
          <button
            data-testid="btn"
            onClick={() => setUser({ ...user, name: 'bob' })}
            onDoubleClick={() => setUser({ ...user, last_update: 'Just Now' })}
          />
          <Memo as="div" data-testid="link" deps={[user.last_update]}>
            {() => `domain.com/${user.name}`}
          </Memo>
        </div>
      )}
    </State>,
  );

  const btn = getByTestId('btn');
  const link = getByTestId('link');

  await user.click(btn);

  expect(link.textContent).toBe('domain.com/alice');

  await user.dblClick(btn);

  expect(link.textContent).toBe('domain.com/bob');
});

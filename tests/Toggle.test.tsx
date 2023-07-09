import { Toggle } from '../src';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Check `Toggle`', async () => {
  const { container, getByTestId } = render(
    <Toggle>
      {(isDark, toggle) => (
        <p data-testid="theme" onClick={toggle}>
          {isDark.toString()}
        </p>
      )}
    </Toggle>,
  );
  expect(container.textContent).toBe('false');

  await user.click(getByTestId('theme'));

  expect(container.textContent).toBe('true');
});

test('Check `Toggle` with options', async () => {
  const { container, getByTestId } = render(
    <Toggle options={['light', 'dark'] as const}>
      {(theme, toggle) => (
        <p data-testid="theme" onClick={toggle}>
          {theme}
        </p>
      )}
    </Toggle>,
  );
  expect(container.textContent).toBe('light');

  await user.click(getByTestId('theme'));

  expect(container.textContent).toBe('dark');
});

test('Check `Toggle` with initial', async () => {
  const { container } = render(
    <Toggle initial='dark' options={['light', 'dark'] as const}>
      {(theme, toggle) => (
        <p data-testid="theme" onClick={toggle}>
          {theme}
        </p>
      )}
    </Toggle>,
  );
  expect(container.textContent).toBe('dark');
});

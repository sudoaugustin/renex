import { Portal } from '../src';
import { render } from '@testing-library/react';

test('Check `Portal`', () => {
  const { getByText, getByTestId } = render(
    <div data-testid="container">
      <Portal>I'm being portalled</Portal>
    </div>,
  );

  // Check the element render
  const element = getByText("I'm being portalled");
  expect(element).toBeDefined();

  // Make sure the element don't render inside it's parent component
  const container = getByTestId('container');
  expect(container.innerHTML).toBe('');
});

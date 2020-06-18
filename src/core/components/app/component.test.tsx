import React from 'react';
import { render } from '@testing-library/react';

import App from '.';

test('it renders', () => {
  const { baseElement } = render(<App />);

  expect(baseElement).toBeDefined();
});

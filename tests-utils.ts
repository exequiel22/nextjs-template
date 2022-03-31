// test-utils.ts
import { render, queries, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import '@testing-library/jest-dom';

export { default as userEvent } from '@testing-library/user-event';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { queries: { ...queries }, ...options });

export * from '@testing-library/react';

export { customRender as render };

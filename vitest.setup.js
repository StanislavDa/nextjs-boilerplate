// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach, expect } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

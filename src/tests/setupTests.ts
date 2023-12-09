import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

import { server } from './server';
import { initializeDb } from './server/db';
import { DataGenerator } from './DataGenerator';

// Enable the API mocking before tests.
beforeAll(() => {
  initializeDb([DataGenerator.todoGenerator(), DataGenerator.todoGenerator()]);

  server.listen();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  cleanup();

  server.resetHandlers();
});

// Disable the API mocking after the tests finished.
afterAll(() => {
  server.close();
});

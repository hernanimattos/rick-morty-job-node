import cron from 'node-cron';

jest.mock('node-cron', () => ({
    schedule: jest.fn(() => ({
        start:jest.fn(),
    })),
  }));

  export default cron;
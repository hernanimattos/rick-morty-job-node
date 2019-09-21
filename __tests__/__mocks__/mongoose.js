import mongoose from 'mongoose';

jest.mock('mongoose', () => ({
    Schema: jest.fn(),
    model: jest.fn(() => ({
      find:jest.fn(),
      findOneAndUpdate: jest.fn(),
    })),
  }));

  export default mongoose;
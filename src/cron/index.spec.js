import cron from 'node-cron';
import searchController from '../controllers/search';
import { jobCharacter } from './index';

describe('cron job', () => {
  it('run job, expect method saveAllChars be executed', () => {
    const cb = jest.fn();
    searchController.saveAllChars = jest.fn();

    jobCharacter();

    expect(cron.schedule).toHaveBeenCalledWith('* * */8 * *', cb(), { scheduled: true });
    expect(searchController.saveAllChars).toHaveBeenCalled();
  });
});

import cron from 'node-cron';
import searchController from '../controllers/search';

const cb = () => {
  searchController.saveAllChars();
  console.log('Cron rodou e fez a rotina');
};

const jobCharacter = () => {
  const task = cron.schedule('* * */8 * *', cb(),
    {
      scheduled: true,
    });

  task.start();
};

jobCharacter();

export {
  jobCharacter,
  cb,
};

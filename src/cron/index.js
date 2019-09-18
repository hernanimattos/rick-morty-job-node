import cron from 'node-cron';
import { saveAllChars } from '../controllers/search';

const task = cron.schedule('* * */8 * *', () => {
  saveAllChars();
  console.log('Cron rodoue fez a rotina');
},
{
  scheduled: true,
});

task.start();

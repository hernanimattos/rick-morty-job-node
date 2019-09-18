import './db';
import './cron';
import { apiAllData } from './controllers/search';

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api', apiAllData);

app.use((req, res, next) => {
  next(createError(404));
});


app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
  next();
});

app.listen(port, () => {
  console.log(`Server rodando em http:localhost:${port}`);
});

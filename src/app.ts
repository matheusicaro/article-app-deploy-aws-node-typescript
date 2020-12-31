require('dotenv').config();
import cors = require('cors');
import morgan = require('morgan');
import express from 'express';

import appRouters from './app.routes';
import environment from './environments/';

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

const app = express();

app.set('env', environment.env);
app.set('port', environment.port);
app.set('host', environment.host);

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('common'));

app.use(appRouters);

export default app;

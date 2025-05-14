import express from 'express';
import morgan from 'morgan';
import apiDocumentation from './router/apiDocumentation.js';

// Init an app utilizing express framework
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', apiDocumentation);

export default app;

import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
import logger from './service/logger.js';

// Load environment variables from .env file
dotenv.config();

// Init port and ip address
const PORT = process.env.PORT || 3000;
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1';

// Creating a Server with aforementioned configs
const server = http.createServer(app);

// Starting our service
server.listen(PORT, IP_ADDRESS, () => {
  logger.info(`HTTP server is running on https://${IP_ADDRESS}:${PORT}`);
  logger.info(`Node version: ${process.version}`);
});

export default server;

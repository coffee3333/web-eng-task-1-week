// eslint-disable-next-line import/no-extraneous-dependencies
import winston from 'winston';

// Just a standart logger, it saves logs in logs/app.log
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

export default logger;

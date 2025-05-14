import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Init Router for endpoints
const router = express.Router();

// router.get('/', (req, res) => res.status(200).json({ message: 'Wellcome!!!' }));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'about.html'));
});

router.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'contact-me.html'));
});

router.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'templates', '404.html'));
  logger.warn('Wrong path!');
});

export default router;

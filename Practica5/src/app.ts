import express from 'express';
import { personajeRouter, serieRouter, asignacionRouter, githubRouter } from './routes';

const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use('/personaje', personajeRouter);
app.use('/serie', serieRouter);
app.use('/asignacion', asignacionRouter);
app.use('/github', githubRouter);

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});

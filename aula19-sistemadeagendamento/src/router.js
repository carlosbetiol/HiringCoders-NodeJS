import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth'

// import User from './app/models/User';
// import Database from './database';
// usado para teste - a linha acima importa o database/index.js tinha faltado mostrar na aula, consegui solucao no forum no slack

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// Rotas autenticadas

// routes.use(authMiddleware)
routes.put('/users', authMiddleware, UserController.update);


export default routes;
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';
import AppointmentController from './app/controllers/AppointmentController';
import authMiddleware from './app/middlewares/auth'
import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/User';
// import Database from './database';
// usado para teste - a linha acima importa o database/index.js tinha faltado mostrar na aula, consegui solucao no forum no slack

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// Rotas autenticadas

routes.use(authMiddleware)
routes.put('/users', UserController.update);

// rota de agendamento
routes.post('/appointment', AppointmentController.store);

// lista colaboradores
routes.get('/collaborator', CollaboratorController.index);

// upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);


export default routes;
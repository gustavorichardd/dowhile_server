import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';

// Originalmente instanciado o authenticateusercontroller direto no router.post.
// porém instanciando o objeto fora, caso precisee instanciar ele em outra rota não precisa fazer nova instancia.
const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();
const profileUserController = new ProfileUserController();

const router = Router();

router.post('/authenticate', authenticateUserController.handle)

router.post('/messages', ensureAuthenticated, createMessageController.handle)

router.get('/messages/last3', getLast3MessagesController.handle)

router.get('/profile', ensureAuthenticated, profileUserController.handle)

export { router }
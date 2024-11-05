import {Router} from 'express';
import {taskController} from '../controllers'

const router = Router();

router.get('/getTasks', taskController.getAllTask);

router.post('/createTask/', taskController.create);

router.patch('/getTask/:id', taskController.update);

router.delete('/deleteTask/:id', taskController.delete);

export default router;
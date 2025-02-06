import { Router } from 'express';
import studentsRouter from './students.routes.js';
import usersRouter from './users.routes.js';

const router = Router();

//rota raiz para teste
router.get('/', (req, res) => {
  return res.status(200).json({ message: "Vai Corinthinhas!" });
});

export default router;
import { Router } from 'express';

const router = Router();

//rota raiz para teste
router.get('/', (req, res) => {
  return res.status(200).json({ message: "Vai Corinthinhas!" });
});

export default router;
import { Router } from 'express';
import { getAll, createState, getByCode } from '../controllers/usStateController';

const router = Router();

router.get('/', getAll);
router.post('/', createState);
router.get('/:code', getByCode);

export default router;

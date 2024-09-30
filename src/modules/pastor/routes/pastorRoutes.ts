import express from 'express';
import { getAllPastors, createPastor, getEngagementsByPastorId } from '../controllers/pastorController';

const router = express.Router();

router.get('/', getAllPastors);
router.post('/', createPastor);
router.get('/:pastorId/impact-map', getEngagementsByPastorId);

export default router;

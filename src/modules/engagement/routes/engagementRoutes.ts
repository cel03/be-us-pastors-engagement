import express from 'express';

import { createEngagement, findAllEngagements } from '../controllers/engagementController';

const router = express.Router();
router.get('/', findAllEngagements);
router.post('/', createEngagement);

export default router;

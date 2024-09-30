import { findAll, create } from '../repositories/engagementRepository';
import type { Request, Response } from 'express';

const findAllEngagements = async (req: Request, res: Response) => {
  try {
    const engagements = await findAll();
    res.json(engagements);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createEngagement = async (req: Request, res: Response) => {
  try {
    const engagement = await create(req.body);
    res.status(201).json(engagement);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { findAllEngagements, createEngagement };

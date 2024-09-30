import { findAll, create } from '../repositories/pastorRepository';
import { findEngagementsByPastorId } from '../../engagement/repositories/engagementRepository';
import { EngagementMapper } from '../../engagement/mappers/engagementMappers';

import type { Request, Response } from 'express';

const getAllPastors = async (req: Request, res: Response) => {
  try {
    const pastors = await findAll();
    res.json(pastors);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createPastor = async (req: Request, res: Response) => {
  try {
    const pastor = await create(req.body);
    res.status(201).json(pastor);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getEngagementsByPastorId = async (req: Request, res: Response) => {
  try {
    const { pastorId } = req.params;
    const engagements = await findEngagementsByPastorId(Number(pastorId));
    const engagementDTOs = engagements.map((engagement) => EngagementMapper.toSimpleDTO(engagement));
    res.json(engagementDTOs);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAllPastors, createPastor, getEngagementsByPastorId };

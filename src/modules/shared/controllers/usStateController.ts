import { findAll, create, findByCode } from '../respositories/usStateRepository';

import type { Request, Response } from 'express';

const getAll = async (req: Request, res: Response) => {
  try {
    const states = await findAll();
    res.json(states);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createState = async (req: Request, res: Response) => {
  const { name, code } = req.body;
  const state = await create({ name, code });
  res.json(state);
};

const getByCode = async (req: Request, res: Response) => {
  const { code } = req.params;
  const state = await findByCode(code);
  res.json(state);
};

export { getAll, createState, getByCode };

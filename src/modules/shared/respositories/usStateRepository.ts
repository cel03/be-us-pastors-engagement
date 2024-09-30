import UsState from '../models/usStateModel';

const findAll = async () => {
  return await UsState.findAll();
};

const create = async (data: any) => {
  return await UsState.create(data);
};

const findByCode = async (code: string) => {
  return await UsState.findOne({ where: { code } });
};

export { findAll, create, findByCode };

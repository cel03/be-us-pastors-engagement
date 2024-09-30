import Pastor from '../models/pastorModel';

const findAll = async () => {
	return await Pastor.findAll();
};

const create = async (data: any) => {
	return await Pastor.create(data);
};

export { findAll, create };

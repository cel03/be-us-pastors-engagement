import Engagement from '../models/engagementModel';

const findAll = async () => {
  return await Engagement.findAll();
};

const create = async (data: any) => {
  return await Engagement.create(data);
};

const findEngagementsByPastorId = async (pastorId: number) => {
  return await Engagement.findAll({ where: { pastorId }, include: ['Pastor', 'UsState'] });
};

export { findAll, create, findEngagementsByPastorId };

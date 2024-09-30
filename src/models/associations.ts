import Pastor from '../modules/pastor/models/pastorModel';
import Engagement from '../modules/engagement/models/engagementModel';
import UsState from '../modules/shared/models/usStateModel';

export const associateModels = () => {
  Pastor.hasMany(Engagement);
  Engagement.belongsTo(Pastor);
  UsState.hasMany(Pastor);
  UsState.hasMany(Engagement);
  Pastor.belongsTo(UsState);
  Engagement.belongsTo(UsState);
};

import express from 'express';
import pastorRoutes from '../../modules/pastor/routes/pastorRoutes';
import engagementRoutes from '../../modules/engagement/routes/engagementRoutes';
import usStateRoutes from '../../modules/shared/routes/usStateRoutes';

const v1Router = express.Router();

v1Router.use('/pastors', pastorRoutes);
v1Router.use('/engagements', engagementRoutes);
v1Router.use('/states', usStateRoutes);

export { v1Router };

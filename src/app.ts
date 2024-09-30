import { envs } from './core/config/env';
import { Server } from './infra/server';

const server = new Server({
	port: envs.PORT,
	apiPrefix: envs.API_PREFIX
});

void server.start();

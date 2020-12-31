import { Router } from 'express';

import { get } from 'lodash';

const appRouters = Router();

appRouters.get('/health', (req, res) => res.status(200).json({ status: 'ONLINE', host: get(req, 'hostname', 'none') }));

export default appRouters;

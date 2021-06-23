// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import { config } from 'dotenv-cra';
import { join } from 'path';

config({ path: join(__dirname, '.env')});

const DEFAULT_PREFIX = process.env.DEFAULT_PREFIX;

export { DEFAULT_PREFIX };

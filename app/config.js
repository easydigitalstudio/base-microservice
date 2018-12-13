import { getConfig } from '@easydigitalstudio/express-server';

export default {
  port: getConfig('PORT'),
};

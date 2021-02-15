/* eslint-env node */
import { rocketLaunch } from '@rocket/launch';
import { rocketBlog } from '@rocket/blog';
// import { absoluteBaseUrlNetlify } from '@rocket/core/helpers';

export default {
  presets: [rocketLaunch(), rocketBlog()],
  // absoluteBaseUrl: absoluteBaseUrlNetlify('http://localhost:8080'),
};

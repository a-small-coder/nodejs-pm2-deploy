require('dotenv').config({ path: '.env.deploy' });

const path = require('path');

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:a-small-coder/nodejs-pm2-deploy.git',
      path: DEPLOY_PATH,
      'pre-deploy': `scp "${path.resolve(__dirname, '.env').replace(/\\\\/g, '/')}" ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm i && npm run build',
    },
  },
}; 
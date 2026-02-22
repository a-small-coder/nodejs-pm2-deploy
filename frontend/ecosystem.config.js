require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:a-small-coder/nodejs-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': 'source ~/.nvm/nvm.sh && cd frontend && export NODE_OPTIONS=--openssl-legacy-provider && npm i && npm run build',
    },
  },
};
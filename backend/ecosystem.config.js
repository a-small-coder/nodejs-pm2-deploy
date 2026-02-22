require('dotenv').config({ path: '.env.deploy' });

const path = require('path');

console.log(path.resolve(__dirname, '.env'))

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
      'post-deploy': 'source ~/.nvm/nvm.sh && cd backend && npm i && npm run build && pm2 startOrReload ecosystem.config.js',
    },
  },
}; 
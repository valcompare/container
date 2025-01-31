import { dockerfileNodeApp } from '@studio-75/sdk.dockerfile.node-app';
import { dockerGitHubAction } from '@studio-75/sdk.github-action.docker.node-app';
import { onboard } from '@studio-75/sdk.onboard';

const envStandard = {
  LOG_LEVEL: 'info',
};

const envDatabase = {
  PG_DATABASE: '',
  PG_HOST: '',
  PG_USER: '',
  PG_PASSWORD: '',
  PG_PORT: '',
};

export const slackConfig = {
  SLACK_OAUTH_TOKEN: '',
};

const infisical = { projectSlug: 'execution-environments-v5w-q', secretPath: '/github' };
const npmSettings = { registry: 'https://npm.pkg.github.com/', scopes: ['studio-75', 'valcompare'] };
const env = { ...envStandard, ...envDatabase, ...slackConfig };
const appWebsite = { name: 'Website', package: '@valcompare/app.website', command: 'website', env };

const run = async () => {
  await onboard();
  await dockerfileNodeApp({ npmSettings, apps: appWebsite });
  await dockerGitHubAction({ showEnv: true, infisical, appNames: appWebsite.name });
};

run();

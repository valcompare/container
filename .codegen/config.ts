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

const slackConfig = {
  SLACK_OAUTH_TOKEN: '',
};

export const website = {
  name: 'Website',
  package: '@valcompare/app.website',
  command: 'website',
  env: { ...envStandard, ...envDatabase, ...slackConfig },
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-website:main',
    containerName: 'valcompare.website',
    envVars: Object.keys({ ...envStandard, ...envDatabase, ...slackConfig }),
    hostPort: 3000,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github' },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
  },
};

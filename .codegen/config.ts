const envStandard = {
  ENVIRONMENT: '',
  LOG_LEVEL: 'info',
};

const envNats = {
  NATS_HOST: '',
};

const envDatabase = {
  POSTGRES_DATABASE: '',
  POSTGRES_HOST: '',
  POSTGRES_USER: '',
  POSTGRES_PASSWORD: '',
  POSTGRES_PORT: '',
};

const resendConfig = {
  RESEND_API_KEY: '',
};

const slackConfig = {
  SLACK_OAUTH_TOKEN: '',
};

const env = { ...envStandard, ...envNats, ...envDatabase, ...slackConfig, ...resendConfig };

export const auth = {
  name: 'Auth',
  package: '@valcompare/app.auth',
  command: 'auth',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-auth:main',
    containerName: 'valcompare.auth',
    envVars: Object.keys(env),
    hostPort: 5001,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

export const website = {
  name: 'Website',
  package: '@valcompare/app.website',
  command: 'website',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-website:main',
    containerName: 'valcompare.website',
    envVars: Object.keys(env),
    hostPort: 5000,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

export const ops = {
  name: 'Ops',
  package: '@valcompare/app.ops',
  command: 'ops',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-ops:main',
    containerName: 'valcompare.ops',
    envVars: Object.keys(env),
    hostPort: 5002,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

export const portalAdvisor = {
  name: 'Advisor Portal',
  package: '@valcompare/app.portal.advisor',
  command: 'advisor-portal',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-ops:main',
    containerName: 'valcompare.portal-advisor',
    envVars: Object.keys(env),
    hostPort: 5003,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

export const portalCustomer = {
  name: 'Customer Portal',
  package: '@valcompare/app.portal.customer',
  command: 'customer-portal',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-ops:main',
    containerName: 'valcompare.portal-customer',
    envVars: Object.keys(env),
    hostPort: 5004,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

export const broker = {
  name: 'Broker',
  package: '@valcompare/cli.broker',
  command: 'broker',
  env,
  npm: {
    registry: 'https://npm.pkg.github.com/',
    readScopes: ['studio-75', 'valcompare'],
    writeScopes: ['valcompare'],
  },
  docker: {
    imageName: 'ghcr.io/valcompare/container-broker:main',
    containerName: 'valcompare.broker',
    envVars: Object.keys(env),
    hostPort: 5005,
  },
  infisical: {
    gitHubAction: { projectSlug: 'execution-environments-v5w-q', secretPath: '/github', recursive: true },
    ssh: { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/ssh' },
    apps: [
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/database' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/resend' },
      { projectSlug: 'solutions-z-cbb', secretPath: '/valcompare/slack' },
    ],
  },
};

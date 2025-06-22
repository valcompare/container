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

const resendConfig = {
  RESEND_API_KEY: '',
};

const slackConfig = {
  SLACK_OAUTH_TOKEN: '',
};

const env = { ...envStandard, ...envDatabase, ...slackConfig, ...resendConfig };

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
    hostPort: 3002,
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
    hostPort: 3002,
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
    hostPort: 3002,
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
    hostPort: 3002,
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
    hostPort: 3002,
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

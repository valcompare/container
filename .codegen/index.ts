import { onboard } from '@studio-75/sdk.onboard';
import { appConfig, dockerNodeApp, dockerNodeAppConfig, infisicalConfig, npmConfig } from '@studio-75/sdk.container';

const infisical = {
  projectSlug: 'execution-environments-v5w-q',
  secretPath: '/github'
}

const npm = {
  registry: 'https://npm.pkg.github.com/',
  tokenName: 'NPM_TOKEN',
  scopes: ['studio-75', 'valcompare'],
}

const standardConfig = {
  LOG_LEVEL: 'info',
};

const pgConfig = {
  PG_DATABASE: '',
  PG_HOST: '',
  PG_USER: '',
  PG_PASSWORD: '',
  PG_PORT: '',
};

const slackConfig = {
  SLACK_OAUTH_TOKEN: '',
};

const run = async () => {
  await onboard().run();

  await dockerNodeApp()
    .setInfisicalConfig(infisicalConfig().setProjectSlug(infisical.projectSlug).setSecretPath(infisical.secretPath).create())
    .addNodeApp(
      dockerNodeAppConfig()
        .addNpmConfig(npmConfig().setRegistry(npm.registry).setTokenName(npm.tokenName).addScopes(npm.scopes).create())
        .setAppConfig(appConfig().setName('Website').setPackage('@valcompare/app.website').setCommand('website').create())
        .addEnvValues({ ...standardConfig, ...pgConfig, ...slackConfig })
        .setExposePort(3000)
        .create()
    )
    .run();
};

run();

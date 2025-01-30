import { appConfig, dockerNodeApp, dockerNodeAppConfig, infisicalConfig, npmConfig } from '@studio-75/sdk.container';
import { onboard } from '@studio-75/sdk.onboard';
import { infisical, npm, pgConfig, slackConfig, standardConfig, website } from './config';

const run = async () => {
  await onboard().run();

  await dockerNodeApp()
    .setInfisicalConfig(infisicalConfig().setProjectSlug(infisical.projectSlug).setSecretPath(infisical.secretPath).create())
    .addNodeApp(
      dockerNodeAppConfig()
        .addNpmConfig(npmConfig().setRegistry(npm.registry).setTokenName(npm.tokenName).addScopes(npm.scopes).create())
        .setAppConfig(appConfig().setName(website.name).setPackage(website.package).setCommand(website.command).create())
        .addEnvValues({ ...standardConfig, ...pgConfig, ...slackConfig })
        .setExposePort(3000)
        .create()
    )
    .run();
};

run();

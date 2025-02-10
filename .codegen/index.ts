import { nodeAppDockerfile } from '@studio-75/sdk.dockerfile.node-app';
import { nodeAppDockerGitHubAction } from '@studio-75/sdk.github-action.docker.node-app';
import { onboard } from '@studio-75/sdk.onboard';
import { website } from './config';

export const run = async () => {
  await onboard();
  await nodeAppDockerfile({
    npm: { registry: website.npm.registry, scopes: website.npm.readScopes },
    apps: { name: website.name, package: website.package, command: website.command, env: website.env },
  });
  await nodeAppDockerGitHubAction({ infisical: website.infisical.gitHubAction, appNames: website.name });
};

run();

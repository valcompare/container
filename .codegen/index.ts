import { nodeAppDockerfile } from '@studio-75/sdk.dockerfile.node-app';
import { nodeAppDockerGitHubAction } from '@studio-75/sdk.github-action.docker.node-app';
import { onboard } from '@studio-75/sdk.onboard';
import { auth, ops, portalAdvisor, portalCustomer, website } from './config';

const apps = [auth, website, ops, portalAdvisor, portalCustomer];

export const run = async () => {
  await onboard();
  await nodeAppDockerfile({
    npm: { registry: website.npm.registry, scopes: website.npm.readScopes },
    apps: apps.map((app) => ({ name: app.name, package: app.package, command: app.command, env: app.env })),
  });
  for (let i = 0; i < apps.length; i++) {
    await nodeAppDockerGitHubAction({ infisical: apps[i].infisical.gitHubAction, appNames: apps[i].name });
  }
};

run();

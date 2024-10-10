import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote4',
  exposes: {
    './Routes': 'apps/remote4/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

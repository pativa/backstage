/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  createServiceBuilder,
  DatabaseManager,
  HostDiscovery,
  loadBackendConfig,
  ServerTokenManager,
  UrlReaders,
} from '@backstage/backend-common';
import { ConfigReader } from '@backstage/config';
import { ServerPermissionClient } from '@backstage/plugin-permission-node';
import { Server } from 'http';
import { applyDatabaseMigrations } from '../database/migrations';
import { CatalogBuilder } from './CatalogBuilder';
import { LoggerService } from '@backstage/backend-plugin-api';

export interface ServerOptions {
  port: number;
  enableCors: boolean;
  logger: LoggerService;
}

// TODO(freben): Migrate to the next catalog when it's in place
export async function startStandaloneServer(
  options: ServerOptions,
): Promise<Server> {
  const logger = options.logger.child({ service: 'catalog-backend' });
  const config = await loadBackendConfig({ logger, argv: process.argv });
  const reader = UrlReaders.default({ logger, config });
  const manager = DatabaseManager.fromConfig(
    new ConfigReader({
      backend: {
        database: { client: 'better-sqlite3', connection: ':memory:' },
      },
    }),
  );
  const database = manager.forPlugin('catalog');
  const discovery = HostDiscovery.fromConfig(config);
  const tokenManager = ServerTokenManager.fromConfig(config, {
    logger,
  });
  const permissions = ServerPermissionClient.fromConfig(config, {
    discovery,
    tokenManager,
  });

  logger.debug('Creating application...');
  await applyDatabaseMigrations(await database.getClient());
  const builder = CatalogBuilder.create({
    logger,
    database,
    config,
    reader,
    permissions,
  });
  const catalog = await builder.build();

  logger.debug('Starting application server...');
  let service = createServiceBuilder(module)
    .setPort(options.port)
    .addRouter('/catalog', catalog.router);
  if (options.enableCors) {
    service = service.enableCors({ origin: 'http://localhost:3000' });
  }
  return await service.start().catch(err => {
    logger.error(err);
    process.exit(1);
  });
}

module.hot?.accept();

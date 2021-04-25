/* @hash 709f66e858fc6846b7e61217fbc8d7af */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { JuanitaCoinSmartContract, JuanitaCoinMigrationSmartContract } from './JuanitaCoin/types';

import { createJuanitaCoinSmartContract } from './JuanitaCoin/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly juanitaCoin: JuanitaCoinSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly juanitaCoin: JuanitaCoinMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  juanitaCoin: createJuanitaCoinSmartContract(client),
});

/* @hash 2244bb8c31f8ad1f4bdc11c2343662f7 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { JuanitaCoinSmartContract } from './types';
import { juanitaCoinABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AJE7YRyQhX8iHMgWk8miaX3qchzQzhFcXr',
    },
  },
  abi: juanitaCoinABI,
  sourceMaps,
};

export const createJuanitaCoinSmartContract = <TClient extends Client>(
  client: TClient,
): JuanitaCoinSmartContract<TClient> => client.smartContract(definition);

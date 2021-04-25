/* @hash 4a51afb3f067212a4ce36919bc5dee36 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { JuanitaCoinSmartContract } from './types';
import { juanitaCoinABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ANs2GL2T6d2K8qXSrquy5FKaai7DNqJQDq',
    },
  },
  abi: juanitaCoinABI,
  sourceMaps,
};

export const createJuanitaCoinSmartContract = <TClient extends Client>(
  client: TClient,
): JuanitaCoinSmartContract<TClient> => client.smartContract(definition);

/* @hash fd877f952c9e5d01d270f5fdb3c1c5b4 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'JuanitaCoin', filePath: path.resolve(__dirname, '../../neo-one/contracts/JuanitaCoin.ts') },
]);

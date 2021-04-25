/* @hash 9ff5e0b0793e789ad40aec0bcf63ff47 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  Event,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  InvokeReceiveTransactionOptions,
  InvokeSendUnsafeTransactionOptions,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export interface JuanitaCoinHelloEventParameters {
  readonly name: string;
}
export interface JuanitaCoinHelloEvent extends Event<'hello', JuanitaCoinHelloEventParameters> {}
export type JuanitaCoinEvent = JuanitaCoinHelloEvent;

export interface JuanitaCoinSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, JuanitaCoinEvent> {
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: {
    (owner?: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, JuanitaCoinEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner?: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly hello: {
    (name: string, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<string, JuanitaCoinEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      name: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<string, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly mintTokens: {
    (options?: InvokeReceiveTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, JuanitaCoinEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeReceiveTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: {
    (options?: InvokeSendUnsafeTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, JuanitaCoinEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeSendUnsafeTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, JuanitaCoinEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface JuanitaCoinMigrationSmartContract {
  readonly balanceOf: (address: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    owner?: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  readonly hello: (
    name: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<string, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  readonly mintTokens: (
    options?: InvokeReceiveTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    options?: InvokeSendUnsafeTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, JuanitaCoinEvent> & { readonly transaction: InvocationTransaction }>;
}

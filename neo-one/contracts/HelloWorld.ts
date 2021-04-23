import { createEventNotifier, SmartContract } from '@neo-one/smart-contract';

const hello = createEventNotifier<string>('hello', 'name');

export class HelloWorld extends SmartContract {
  public hello(name: string): string {
    const value = `Hello ${name}!`;

    hello(value);

    return value;
  }
}

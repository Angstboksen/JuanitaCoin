import {
  Address,
  Blockchain,
  constant,
  Deploy,
  Fixed,
  Hash256,
  MapStorage,
  receive,
  SmartContract,
} from "@neo-one/smart-contract";

export class JuanitaCoin extends SmartContract {
  public readonly name = "JuanitaCoin";
  public readonly symbol = "JuCo";
  public readonly decimals = 8;
  private mutableSupply: Fixed<8> = 0;
  private readonly balances = MapStorage.for<Address, Fixed<8>>();

  public constructor(public readonly owner: Address = Deploy.senderAddress) {
    super();
    if (!Address.isCaller(owner)) {
      throw new Error("Sender was not the owner.");
    }
  }

  @constant
  public get totalSupply(): Fixed<8> {
    return this.mutableSupply;
  }

  @constant
  public balanceOf(address: Address): Fixed<8> {
    const balance = this.balances.get(address);

    return balance === undefined ? 0 : balance;
  }

  public transfer(from: Address, to: Address, amount: Fixed<8>): boolean {
    // Sanity check that amount.
    if (amount < 0) {
      throw new Error(`Amount must be greater than 0: ${amount}`);
    }

    // Verify that the `from` `Address` has approved this call.
    if (!Address.isCaller(from)) {
      throw new Error("from Address did not approve the transfer");
    }

    // Sanity check that the `from` `Address` has enough balance
    const fromBalance = this.balanceOf(from);
    if (fromBalance < amount) {
      throw new Error("From balance is insufficient");
    }

    // Update balances accordingly
    const toBalance = this.balanceOf(to);
    this.balances.set(from, fromBalance - amount);
    this.balances.set(to, toBalance + amount);

    return true;
  }

  @receive
  public mintTokens(): void {
    // Inspect the current transaction
    const { references, outputs } = Blockchain.currentTransaction;
    if (references.length === 0) {
      throw new Error("Invalid mintTokens");
    }

    // Take the first sender address as the minter.
    const sender = references[0].address;

    // Sum up the amount of NEO sent to the contract. If anything else is sent, throw an error.
    let amount = 0;
    for (const output of outputs) {
      if (output.address.equals(this.address)) {
        if (!output.asset.equals(Hash256.NEO)) {
          throw new Error("Invalid mintTokens");
        }

        amount += output.value;
      }
    }

    this.issue(sender, amount);
  }

  private issue(address: Address, amount: Fixed<8>): void {
    // Update the balance
    this.balances.set(address, this.balanceOf(address) + amount);
    // Update the supply
    this.mutableSupply += amount;
  }
}

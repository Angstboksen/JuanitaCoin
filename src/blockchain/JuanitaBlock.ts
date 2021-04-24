import SHA256 from "crypto-js/sha256";

export default class JuanitaBlock implements IJuanitaBlock {
  index: number;
  previousHash: string;
  timestamp: string;
  data: any;
  hash: string;
  nonce: number;

  constructor(
    index: number,
    timestamp: string,
    data: any,
    previousHash: string = ""
  ) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash = () => {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  };

  mineBlock = (complexity: any) => {
    while (
      this.hash.substring(0, complexity) !== Array(complexity + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }

    console.log("Mining is taking place: " + this.hash);
  };
}

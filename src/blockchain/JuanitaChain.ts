import JuanitaBlock from "./JuanitaBlock";

export default class JuanitaChain implements IJuanitaChain {
  chain: IJuanitaBlock[];
  complexity: number;

  constructor() {
    this.chain = [this.buildGenesisBlock()];
    this.complexity = 5;
  }

  buildGenesisBlock = () => {
    return new JuanitaBlock(0, "23/04/2021", "Genesis block", "0");
  };

  obtainLatestBlock = () => {
    return this.chain[this.chain.length - 1];
  };

  addBlock = (newBlock: JuanitaBlock) => {
    newBlock.previousHash = this.obtainLatestBlock().hash;
    newBlock.mineBlock(this.complexity);
    this.chain.push(newBlock);
  };

  confirmValidity = () => {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  };
}

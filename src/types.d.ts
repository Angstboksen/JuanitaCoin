interface IJuanitaBlock {
  computeHash();
  index: number;
  previousHash: string;
  timestamp: string;
  data: any;
  hash: string;
  nonce: number;
}

interface IJuanitaChain {
  chain: IJuanitaBlock[];
  complexity: number;
}

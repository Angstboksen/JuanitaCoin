import JuanitaBlock from "./JuanitaBlock";
import JuanitaChain from "./JuanitaChain";

export const main = () => {
  let juanitacoin = new JuanitaChain();
  console.log("<<Lets mine block 1>>");
  juanitacoin.addBlock(new JuanitaBlock(1, "23/04/2021", { quantity: 10 }));
  console.log("<<Lets mine block 2>>");
  juanitacoin.addBlock(new JuanitaBlock(2, "23/04/2021", { quantity: 20 }));
  console.log(juanitacoin);
  return juanitacoin;
};

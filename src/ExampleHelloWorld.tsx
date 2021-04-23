import React, { useCallback, useState } from "react";
import { useContracts } from "./neo-one";

export const ExampleHelloWorld = () => {
  const { helloWorld } = useContracts();
  const [name, setName] = useState("World");
  const [response, setResponse] = useState("Hello World!");

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [name]
  );

  const onSubmit = useCallback(() => {
    helloWorld.hello
      .confirmed(name)
      .then((receipt: any) => {
        if (receipt.result.state === "FAULT") {
          throw new Error(receipt.result.message);
        }

        setResponse(receipt.result.value);
      })
      .catch((err: any) => {
        setResponse(err.name);
      });
  }, [name, helloWorld]);

  return (
    <div>
      <input type="text" value={name} onChange={onChangeInput} />
      <input type="button" value="Submit" onClick={onSubmit} />
      <div>{response}</div>
    </div>
  );
};

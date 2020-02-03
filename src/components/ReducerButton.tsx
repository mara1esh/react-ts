import React, { useRef, useContext } from "react";
import { useClickOutside } from "./useClickOutside";
import { GlobalContext } from "./GlobalState";
import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
`;

export const ReducerButtons: React.FC<{}> = () => {
  const context = useContext(GlobalContext);
  const { rValue, randomNumber, turnOff, turnOn, setRandomValue } = context;

  const ref = useRef<HTMLDivElement>(null!);

  useClickOutside(ref, () => {
    console.log("clicked outside");
  });

  console.log("state", context);

  return (
    <Wrapper ref={ref}>
      {rValue && <h1>{randomNumber}</h1>}
      <button onClick={turnOn} disabled={rValue}>
        Show
      </button>
      <button onClick={turnOff} disabled={!rValue}>
        Hide
      </button>
      <button onClick={setRandomValue}>Get</button>
    </Wrapper>
  );
};

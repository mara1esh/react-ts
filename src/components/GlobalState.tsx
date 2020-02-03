import React, { createContext, useReducer } from "react";

enum Types {
  turnOff,
  turnOn,
  setRandomValue
}

type Action = {
  type: Types;
  payload?: any;
};

type State = {
  rValue: boolean;
  randomNumber: number | null;
  turnOff: () => void;
  turnOn: () => void;
  setRandomValue: () => void;
};

export const initialValues: State = {
  rValue: true,
  randomNumber: -1,
  turnOff: () => {},
  turnOn: () => {},
  setRandomValue: () => {}
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case Types.turnOn:
      return {
        ...state,
        rValue: true
      };

    case Types.turnOff:
      return {
        ...state,
        rValue: false
      };

    case Types.setRandomValue:
      return {
        ...state,
        randomNumber: action.payload
      };

    default:
      return state;
  }
}

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        randomNumber: state.randomNumber,
        turnOn: () => dispatch({ type: Types.turnOn }),
        turnOff: () => dispatch({ type: Types.turnOff }),
        setRandomValue: () =>
          dispatch({
            type: Types.setRandomValue,
            payload: Math.floor(Math.random() * 10)
          })
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

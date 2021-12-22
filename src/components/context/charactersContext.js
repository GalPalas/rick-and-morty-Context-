import React from "react";

const initialState = {
  status: "idle",
  characters: [],
};

const CharacterContext = React.createContext(initialState);

export default CharacterContext;

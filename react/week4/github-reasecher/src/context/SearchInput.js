import React, { useState, useContext } from "react";
import { searchContext } from "./createContext";


const SearchInput = () => {
  const contextValue = React.useContext(searchContext);

  return (
    <div>
      <input
        type="text"
        value={contextValue.textValue}
        onChange={(e) => {
          contextValue.setTextValue(e.target.value);
        }}
        placeholder="User name"
      />
    </div>
  );
}

export default SearchInput;
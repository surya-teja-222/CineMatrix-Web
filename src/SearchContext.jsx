
// todo: do not commit this file
import react from "react";

export const SearchContext = react.createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = react.useState("");
  // store searchTerm: suggestions
  const [suggestions, setSuggestions] = react.useState({});

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, suggestions, setSuggestions }}>
      {children}
    </SearchContext.Provider>
  );
}

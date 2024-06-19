import react, { useState } from "react";

export const SearchContext = react.createContext();

export const SearchProvider = ({ children }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <SearchContext.Provider value={{ selectedTerm, setSelectedTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = react.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

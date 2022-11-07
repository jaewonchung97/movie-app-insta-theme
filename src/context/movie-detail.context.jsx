import { createContext, useState } from "react";

export const movieDetailContext = createContext({
  selectedMovieId: "",
  setSelectedMovieId: () => {},
});

export function MovieDetailProvider({ children }) {
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const value = { selectedMovieId, setSelectedMovieId };

  return (
    <movieDetailContext.Provider value={value}>
      {children}
    </movieDetailContext.Provider>
  );
}

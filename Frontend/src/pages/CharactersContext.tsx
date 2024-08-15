import React, { createContext, useState, useEffect } from "react";

//Context used here for global state managing

//Manage and provide character data

interface Character {
  _id: any;
  id: number;
  name: string;
  children: string[];
  monarchy: string;
  age: number | string;
  abilities: string[];
  specialty: string;
}

//The shape of context value
interface CharactersContextType {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
  loading: true,
  error: null,
});

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect to fetch characters from API when component mounst

  const baseURL = "http://localhost:3000";
  useEffect(() => {
    fetch(`${baseURL}/api/characters`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setError("Failed to load characters");
        setLoading(false);
      });
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharactersContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from 'react';

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

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/characters')
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
        console.error('Error fetching characters:', error);
        setError('Failed to load characters');
        setLoading(false);
      });
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharactersContext.Provider>
  );
};
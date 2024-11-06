import React, { createContext, useState } from 'react';

export const CatContext = createContext();

export function CatProvider({ children }) {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async ({ limit, breed }) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}`
      );
      
      if (!response.ok) {
        throw new Error('Falha ao buscar dados da API. Tente novamente mais tarde.');
      }

      const data = await response.json();
      setCats(data);
      setError(''); 
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <CatContext.Provider value={{ cats, error, handleSearch }}>
      {children}
    </CatContext.Provider>
  );
}

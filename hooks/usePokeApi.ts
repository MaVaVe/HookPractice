import { useEffect, useState } from 'react';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  
}

const useJolteon = () => {
  const [jolteonData, setJolteonData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchJolteonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/jolteon');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Pokemon = await response.json();
        setJolteonData(data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchJolteonData();
  }, []);

  return { jolteonData, loading, error };
};

export default useJolteon;

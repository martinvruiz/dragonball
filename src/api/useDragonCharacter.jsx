import { useEffect, useState } from 'react';



export const useDragonCharacter = (dragonId) => {

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://dragonball-api.com/api/characters/${dragonId}`);
                if (!response.ok) throw new Error('Fetch failed');
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacter();
    }, [dragonId]);

    return { character, loading, error };
}
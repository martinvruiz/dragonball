import useDragonApi from "../api/useDragonApi"
import { useState } from "react";

export const Characters = () => {
    
    const [endpoint, setEndpoint] = useState("https://dragonball-api.com/api/characters");
    const { data: characters, loading, error, paginationLinks } = useDragonApi(endpoint);

    const handlePagination = (link)=>{
        if(link){
            setEndpoint(link);
    }}


    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center">error: {error}</p>;

    return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
            {characters.map((character) => (
                <div 
                    key={character.id}
                    className="bg-gray-100 text-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <div className="relative h-72">
                        <img 
                            src={character.image} 
                            alt={character.name} 
                            className="w-full h-full object-contain rounded-t-xl p-1"
                        />
                    <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full opacity-30 rounded-t-xl"></div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                        <p className="text-sm text-gray-600">{character.race}</p>
                        <p className="text-sm text-gray-500">Base ki: {character.ki}</p>
                        <p className="text-sm text-gray-500">Max ki: {character.maxKi}</p>
                    </div>
                </div>
            ))}
    </div>
    <div className="flex justify-center my-6 gap-2">
        <button
            onClick={() => handlePagination(paginationLinks.first)}
            disabled={!paginationLinks.first}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"   
        >
            First
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.previous)}
            disabled={!paginationLinks.previous}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"   
        >
            Previous
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.next)}
            disabled={!paginationLinks.next}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"      
        >
            Next
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.last)}
            disabled={!paginationLinks.last}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"     
        >
            Last
        </button>
    </div>
</div>
    )
}
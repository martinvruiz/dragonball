import useDragonApi from "../api/useDragonApi"
import { useState } from "react";
import { Link } from "react-router-dom";

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
                        <Link to={`/characters/${character.id}`}>
                            <img 
                                src={character.image} 
                                alt={character.name} 
                                className="w-full h-full object-contain rounded-t-xl p-1"
                        />
                        <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full opacity-30 rounded-t-xl"></div>
                        </Link>
                    </div>
                    <div className="p-4 bg-orange-500 text-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                    </div>
                </div>
            ))}
    </div>
    <div className="flex justify-center my-6 gap-4">
        <button
            onClick={() => handlePagination(paginationLinks.first)}
            disabled={!paginationLinks.first}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Primer pag.
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.previous)}
            disabled={!paginationLinks.previous}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Previa
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.next)}
            disabled={!paginationLinks.next}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"      
        >
            Siguiente
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.last)}
            disabled={!paginationLinks.last}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"     
        >
            Ultima pag.
        </button>
    </div>
</div>
    )
}
import useDragonApi from "../api/useDragonApi";
import { useState } from "react";

const Planets = () => {
    const [endpoint, setEndpoint] = useState("https://dragonball-api.com/api/planets");
    const { data: planets, loading, error, paginationLinks } = useDragonApi(endpoint);

    const handlePagination = (link)=>{
        if(link){
            setEndpoint(link);
    }}

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                {loading ? (
                <p>Cargando...</p>
                ) : error ? (
                <p>{error}</p>
                ) : (
                planets.map((planet) => (
                <div
                    key={planet.id}
                    className="bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
                >
                    <img
                        src={planet.image}
                        alt={planet.name}
                        className="w-full h-56 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">{planet.name}</h2>
                        <p className="text-sm text-gray-500 mb-4">{planet.description}</p>
                    </div>
                </div>
                ))
            )}
            </div>
        <div className="flex justify-center my-6 gap-2">
        <button
            onClick={() => handlePagination(paginationLinks.first)}
            disabled={!paginationLinks.first}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Primer pag.
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.previous)}
            disabled={!paginationLinks.previous}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Previa
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.next)}
            disabled={!paginationLinks.next}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Siguiente
        </button>
        <button
            onClick={() => handlePagination(paginationLinks.last)}
            disabled={!paginationLinks.last}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-50 hover:scale-110 transform transition duration-300"   
        >
            Ultima pag.
        </button>
    </div>
        </div>
    );
}

export default Planets;
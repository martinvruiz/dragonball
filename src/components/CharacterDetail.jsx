import { useDragonCharacter } from "../api/useDragonCharacter";
import { useParams } from "react-router-dom";


export const CharacterDetail = () => {
    const { id } = useParams();
    const { character} = useDragonCharacter(id);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 text-gray-900 text-center">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={character?.image} 
            alt={character?.name} 
            className="w-64 h-64 object-contain rounded-lg hover:scale-105 transition-transform"
          />
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-3xl font-bold text-indigo-600">{character?.name}</h1>
            <p className="text-gray-600 text-md mt-2">{character?.description || 'Sin descripción disponible'}</p>
  
            <div className="mt-4">
              <p><strong>Raza:</strong> {character?.race || 'Desconocida'}</p>
              <p><strong>Ki:</strong> {character?.ki || 'N/A'}</p>
              <p><strong>Max ki:</strong> {character?.maxKi || 'Desconocido'}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
            {
                character?.transformations && character.transformations.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-600">Transformaciones</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 place-content-center">
                            {character.transformations.map((transformation) => (
                                <div 
                                    key={transformation.id}
                                    className="bg-gray-100 text-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                >
                                    <div className="relative h-72">
                                        <img 
                                            src={transformation.image} 
                                            alt={transformation.name} 
                                            className="w-full h-full object-contain rounded-t-xl p-1"
                                        />
                                        <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full opacity-30 rounded-t-xl"></div>
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold mb-2">{transformation.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>)
            }
        </div>
      </div>
      );
    };
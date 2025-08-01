import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnimesAPI } from "../api/AnimeAPI";
import Loader from "../components/Loader";


export default function MainView() {

  const { isLoading , data } = useQuery({
    queryKey: ['vistaPortada'],
    queryFn: getAnimesAPI
  })

  console.log(data);
  
  if(isLoading) return <Loader />

if(data) return (
    <div className="bg-[#141414] min-h-screen text-white">
      <h1 className="ml-10 text-3xl font-bold pt-8">Best Rank Animes</h1>
      <div className="flex overflow-x-auto p-10 gap-6">
        { data.map( anime => (
          <div
            key={anime._id}
            className="bg-[#222] rounded-xl w-[250px] shadow-lg p-4 text-center flex flex-col items-center"
          >
            <img    
              src={anime.img}
              alt={anime.name}
              className="w-[198px] rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold my-2 min-h-[2.5rem] flex items-center justify-center text-center">
  {anime.name}
</h2>
            <p className="mb-2">Valoración: ⭐ {anime.animeRanking.length}</p>
            <Link
              className="bg-[#e50914] text-white rounded-md px-4 py-2 mt-2 hover:bg-red-700 transition"
              to={`/anime/${anime.nameUrl}`}
            >Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

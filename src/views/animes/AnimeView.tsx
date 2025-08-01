import portada from  "../../assets/covers/1.png"

export default function AnimeView() {
  // Datos de ejemplo, puedes reemplazarlos por props o datos de API
  const anime = {
    title: "Attack on Titan",
    image: portada, // Ajusta la ruta según tu estructura
    synopsis: "En un mundo devastado por titanes, la humanidad lucha por sobrevivir tras enormes muros.",
    episodes: 87,
    rating: 4.9,
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white flex flex-col items-center py-10">
      <div className="bg-[#222] rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-56 h-80 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
          <p className="mb-4 text-gray-300">{anime.synopsis}</p>
          <div className="mb-2">
            <span className="font-semibold">Episodios:</span> {anime.episodes}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Calificación de usuarios:</span> <span className="text-yellow-400">⭐ {anime.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
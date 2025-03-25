import Happy from "../assets/Happy.svg";
import Angry from "../assets/Angry.svg";
import Anxious from "../assets/Anxious.svg";
import Sad from "../assets/Sad.svg";
import Fear from "../assets/Fear.svg";


function LatestMood() {

  const moods = [
    { name: "Happy", color: "bg-teal-100 text-teal-400", image: Happy},
    { name: "Angry", color: "bg-pink-100 text-pink-500", image: Angry},
    { name: "Anxious", color: "bg-indigo-100 text-indigo-400", image: Anxious},
    { name: "Sad", color: "bg-blue-100 text-blue-800", image: Sad},
    { name: "Fear", color: "bg-purple-100 text-purple-600", image: Fear},
  ];

  const moodName = "Happy";
  const mood = moods.find((m) => m.name === moodName);
  
  const latestMood = {
    name: mood?.name || "",
    color: mood?.color || "",
    image: mood?.image || "",
    date: "11/03/2025",
    journal: "Today was a good day, I walked my dog in the park and played with him with the ball. My sleep was great, I felt like new when I stood up. I had a great breakfast and I'm ready to start the day.",
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4">Latest Mood</h5>

      {/* Contenedor principal con disposición en flex */}
      <div className="flex-col gap-8 p-2 min-[500px]:flex-col md:flex lg:flex-row md:p-4 lg:p-8">
        {/* Icono del estado de ánimo */}
        <div className="flex items-center justify-center">
          <img
            src={latestMood.image}
            alt={latestMood.name}
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Contenedor de texto */}
        <div className="flex-1">
          {/* Etiqueta del estado de ánimo */}
          <span className={`${latestMood.color} text-xs px-3 py-1 rounded-lg`}>
            {latestMood.name}
          </span>

          {/* Título del journal */}
          <h6 className="text-base font-semibold mt-3">Journal entry:</h6>

          {/* Descripción */}
          <p className="text-gray-600 text-md mt-3 text-justify">
            {latestMood.journal}
          </p>
        </div>
      </div>

        {/* Fecha alineada a la derecha */}
        <div className="flex justify-end mt-6">
          <span className="text-gray-400 text-sm">{latestMood.date}</span>
        </div>

    </div>
  );
}

export default LatestMood;

function MoodCounter() {
  const moods = [
    {
      name: "Happy",
      count: 21,
      color: "bg-teal-100 text-teal-400",
      circle: "bg-cyan-100 text-cyan-500",
    },
    {
      name: "Angry",
      count: 21,
      color: "bg-pink-100 text-pink-500",
      circle: "bg-red-100 text-red-500",
    },
    {
      name: "Anxious",
      count: 21,
      color: "bg-indigo-100 text-indigo-400",
      circle: "bg-indigo-100 text-indigo-500",
    },
    {
      name: "Sad",
      count: 21,
      color: "bg-blue-100 text-blue-800",
      circle: "bg-blue-100 text-blue-500",
    },
    {
      name: "Fear",
      count: 21,
      color: "bg-purple-100 text-purple-600",
      circle: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4">Mood Counter</h5>

      {/* Contenedor general con ajuste de tamaño */}
      <div className="flex flex-col items-center">
        {/* Primera fila con 3 tarjetas */}
        <div className="grid gap-2 lg:gap-4 md:gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {moods.slice(0, 5).map((mood, index) => (
            <div
              key={index}
              className={`relative p-4 w-40 h-30 flex flex-col items-center justify-center ${mood.color} rounded-lg shadow-md`}
            >
              <span className="text-base font-semibold mb-15">{mood.name}</span>
              <div
                className={`absolute bottom-4 w-15 h-15 flex items-center justify-center rounded-full ${mood.circle} text-base font-bold shadow-md`}
              >
                {mood.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodCounter;

function MoodCounter() {
  const moods = [
    {
      name: "Happy",
      count: 21,
      color: "bg-teal-100 text-teal-400",
      circle:"bg-teal-200 text-teal-400",
    },
    {
      name: "Angry",
      count: 21,
      color: "bg-pink-100 text-pink-500",
      circle: "bg-pink-200 text-pink-500",
    },
    {
      name: "Anxious",
      count: 21,
      color: "bg-indigo-100 text-indigo-400",
      circle: "bg-indigo-200 text-indigo-400",
    },
    {
      name: "Sad",
      count: 21,
      color: "bg-blue-100 text-blue-800",
      circle: "bg-blue-200 text-blue-800",
    },
    {
      name: "Fear",
      count: 21,
      color: "bg-purple-100 text-purple-600",
      circle: "bg-purple-200 text-purple-600",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 flex-col">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4 md:mb-8 lg:mb-12">Mood Counter</h5>

      {/* Contenedor general con ajuste de tamaño */}
      <div className="flex flex-wrap justify-center items-center gap-4">
          {moods.slice(0, 5).map((mood, index) => (
            <div
              key={index}
              className={`p-4 w-30 h-30 flex flex-col items-center ${mood.color} rounded-lg`}
            >
              <span className="text-base font-semibold pb-2">{mood.name}</span>
              <div
                className={`w-15 h-15 flex items-center justify-center rounded-full ${mood.circle} text-xl font-bold`}
              >
                {mood.count}
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}

export default MoodCounter;

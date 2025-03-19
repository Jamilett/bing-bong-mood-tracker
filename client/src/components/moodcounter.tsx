function MoodCounter() {
  const moods = [
    { name: "Happy", count: 21, color: "bg-cyan-50 text-cyan-400", circle: "bg-cyan-100 text-cyan-500" },
    { name: "Angry", count: 21, color: "bg-red-50 text-red-400", circle: "bg-red-100 text-red-500" },
    { name: "Anxious", count: 21, color: "bg-indigo-50 text-indigo-400", circle: "bg-indigo-100 text-indigo-500" },
    { name: "Sad", count: 21, color: "bg-blue-50 text-blue-400", circle: "bg-blue-100 text-blue-500" },
    { name: "Relaxed", count: 21, color: "bg-purple-50 text-purple-400", circle: "bg-purple-100 text-purple-500" },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4">Mood Counter</h5>

      {/* Contenedor general con ajuste de tamaño */}
      <div className="flex flex-col items-center">
        {/* Primera fila con 3 tarjetas */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          {moods.slice(0, 3).map((mood, index) => (
            <div key={index} className={`relative p-4 w-40 h-30 flex flex-col items-center justify-center ${mood.color} rounded-lg shadow-md`}>
                <span className="text-base font-semibold mb-15">{mood.name}</span>
                <div className={`absolute bottom-4 w-15 h-15 flex items-center justify-center rounded-full ${mood.circle} text-base font-bold shadow-md`}>
                {mood.count}
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila con espacio adicional y centrada */}
        <div className="grid grid-cols-2 gap-x-4 mt-4">
          {moods.slice(3, 5).map((mood, index) => (
            <div key={index} className={`relative p-4 w-40 h-30 flex flex-col items-center justify-center ${mood.color} rounded-lg shadow-md`}>
              <span className="text-base font-semibold mb-15">{mood.name}</span>
              <div className={`absolute bottom-4 w-15 h-15 flex items-center justify-center rounded-full ${mood.circle} text-base font-bold shadow-md`}>
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

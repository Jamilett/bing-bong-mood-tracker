function LatestMood() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4">Latest Mood</h5>

      {/* Contenedor principal con disposición en flex */}
      <div className="flex items-start gap-6">
        {/* Icono del estado de ánimo */}
        <div className="w-28 h-28 flex items-center justify-center bg-cyan-100 rounded-full text-6xl">
          😊
        </div>

        {/* Contenedor de texto */}
        <div className="flex-1">
          {/* Etiqueta del estado de ánimo */}
          <span className="bg-cyan-200 text-cyan-800 text-xs px-3 py-1 rounded-lg">Happy</span>

          {/* Título del journal */}
          <h6 className="text-base font-semibold mt-3">Journal entry:</h6>

          {/* Descripción */}
          <p className="text-gray-600 text-sm mt-3 text-justify">
            Today was a good day, I walked my dog in the park and played with him with the ball.
            My sleep was great, I felt like new when I stood up.
          </p>
        </div>

        {/* Fecha alineada a la derecha */}
        <div className="absolute bottom-110 right-9 text-gray-400 text-sm">
          11/03/2025
        </div>
      </div>
    </div>
  );
}

export default LatestMood;

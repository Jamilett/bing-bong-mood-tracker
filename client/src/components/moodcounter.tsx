function MoodCounter () {
    
    return (
      <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900">Mood Counter</h5>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="py-6" id="donut-chart"></div>
    </div>
  );
  }
  
  export default MoodCounter;
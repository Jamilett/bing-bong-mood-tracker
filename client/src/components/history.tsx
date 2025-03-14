function History() {

    return (
      <div className=" bg-white rounded-lg shadow-sm p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex justify-between mb-3">
          <div className="flex justify-center items-center">
            <h5 className="text-xl font-bold leading-none text-gray-900">Mood history</h5>
          </div>
        </div>
  
        {/* Donut Chart */}
        <div className="py-6" id="donut-chart"></div>
      </div>
    );
  }
  
  export default History;
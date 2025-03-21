import React, { useState, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

const Alltime: React.FC = () => {
const moods = ["Happy", "Sad", "Anxious", "Angry", "Relaxed"];
   const moodData: Record<string, number> = {
     Happy: 13,
     Sad: 5,
     Anxious: 4,
     Angry: 3,
     Relaxed: 5,
   };
 
   
   const moodColors: Record<string, string> = {
     Happy: "#1C64F2",
     Sad: "#16BDCA",
     Anxious: "#FDBA8C",
     Angry: "#E74694",
     Relaxed: "#4CAF50",
   };
 
   const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
 
   
   const filteredSeries = selectedMoods.length > 0
     ? selectedMoods.map((mood) => moodData[mood])
     : Object.values(moodData);
 
   const filteredLabels = selectedMoods.length > 0
     ? selectedMoods
     : moods;
 
   const filteredColors = selectedMoods.length > 0
     ? selectedMoods.map((mood) => moodColors[mood])
     : Object.values(moodColors);
 
   const chartOptions = useMemo(() => ({
     series: filteredSeries,
     colors: filteredColors, 
     chart: { height: 320, width: "100%", type: "donut" },
     stroke: { colors: ["transparent"] },
     plotOptions: {
       pie: {
         donut: {
           labels: {
             show: true,
             total: {
               showAlways: true,
               show: false,
               label: "Total",
               formatter: (w: any) =>
                 `${w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)}`,
             },
           },
           size: "80%",
         },
       },
     },
     labels: filteredLabels,
     dataLabels: { enabled: false },
     legend: { position: "bottom", fontFamily: "Inter, sans-serif" },
   }), [filteredSeries, filteredLabels, filteredColors]); 
 
   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { value, checked } = event.target;
     setSelectedMoods((prev) =>
       checked ? [...prev, value] : prev.filter((mood) => mood !== value)
     );
   };
 
   return (
     <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
       <h5 className="text-xl font-bold text-gray-900 mb-3">All time</h5>
       <ReactApexChart options={chartOptions} series={filteredSeries} type="donut" height={320} />
       <div className="flex flex-wrap mt-4">
         {moods.map((mood) => (
           <div key={mood} className="flex items-center me-4">
             <input
               id={mood}
               type="checkbox"
               value={mood}
               checked={selectedMoods.includes(mood)}
               onChange={handleCheckboxChange}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
             />
             <label htmlFor={mood} className="ms-2 text-sm font-medium text-gray-900">{mood}</label>
           </div>
         ))}
       </div>
     </div>
   );
 };
export default Alltime;
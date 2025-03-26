import { useQuery } from '@apollo/client';
import type { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { QUERY_MOOD_COUNTER_ALL } from '../../utils/queries';

const Alltime: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY_MOOD_COUNTER_ALL);

  const moods = ["Happy", "Angry", "Anxious", "Sad", "Fear"];

  const moodColors: Record<string, string> = {
    Happy: "#16BDCA",
    Angry: "#E74694",
    Anxious: "#8DA2FB",
    Sad: "#1E429F",
    Fear: "#7E3AF2",
  };

  // If data is still loading or there's an error, show appropriate feedback
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Get mood counts from data
  const moodData = {
    Happy: data.get_happy_count,
    Angry: data.get_angry_count,
    Anxious: data.get_anxious_count,
    Sad: data.get_sad_count,
    Fear: data.get_fear_count,
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
      width: '100%',
      height: 320,
    },
    labels: moods,
    colors: Object.values(moodColors),
    stroke: {
      colors: ['transparent'],
    },
    legend: {
      position: 'bottom',
      show: false,
      fontFamily: 'Inter, sans-serif',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
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
        },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      <h5 className="text-xl font-bold text-gray-900 mb-3">All Time</h5>
      <ReactApexChart
        options={chartOptions}
        series={Object.values(moodData)}
        type="donut"
        height={320}
      />
      <div className="flex flex-wrap justify-center mt-4 gap-4 text-gray-500">
        {moods.map((mood) => (
          <div key={mood} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: moodColors[mood] }}></span>
            <span>{mood}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltime;
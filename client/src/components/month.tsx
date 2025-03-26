import React from 'react';
import { useQuery } from '@apollo/client';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { QUERY_MOOD_COUNTER_MONTH } from '../../utils/queries';

const Month: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY_MOOD_COUNTER_MONTH);

  const moods = ["Happy", "Angry", "Anxious", "Sad", "Fear"];

  const defaultMoodData: Record<string, number> = {
    Happy: 0,
    Angry: 0,
    Anxious: 0,
    Sad: 0,
    Fear: 0,
  };

  const moodData = data
    ? {
        Happy: data.get_happy_count_month,
        Angry: data.get_angry_count_month,
        Anxious: data.get_anxious_count_month,
        Sad: data.get_sad_count_month,
        Fear: data.get_fear_count_month,
      }
    : defaultMoodData;

  const moodColors: Record<string, string> = {
    Happy: "#16BDCA",
    Angry: "#E74694",
    Anxious: "#8DA2FB",
    Sad: "#1E429F",
    Fear: "#7E3AF2",
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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      <h5 className="text-xl font-bold text-gray-900 mb-3">Last Month</h5>
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

export default Month;
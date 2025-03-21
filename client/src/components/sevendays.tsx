import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const Sevendays: React.FC = () => {
  const moods = ["Happy", "Angry", "Anxious", "Sad", "Fear"];
  const moodData: Record<string, number> = {
    Happy: 13,
    Angry: 5,
    Anxious: 4,
    Sad: 3,
    Fear: 5,
  };

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
      <h5 className="text-xl font-bold text-gray-900 mb-3">Last Month</h5>
      <ReactApexChart
        options={chartOptions}
        series={Object.values(moodData)}
        type="donut"
        height={320}
      />
    </div>
  );
};

export default Sevendays;
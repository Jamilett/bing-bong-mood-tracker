import { useQuery } from '@apollo/client';
import { QUERY_MOOD_COUNTER_ALL } from '../../utils/queries';

function MoodCounter() {
  const { loading, error, data } = useQuery(QUERY_MOOD_COUNTER_ALL);

  const moods = [
    {
      name: "Happy",
      color: "bg-teal-100 text-teal-400",
      circle: "bg-teal-200 text-teal-400",
      count: data?.get_happy_count || 0
    },
    {
      name: "Angry",
      color: "bg-pink-100 text-pink-500",
      circle: "bg-pink-200 text-pink-500",
      count: data?.get_angry_count || 0
    },
    {
      name: "Anxious",
      color: "bg-indigo-100 text-indigo-400",
      circle: "bg-indigo-200 text-indigo-400",
      count: data?.get_anxious_count || 0
    },
    {
      name: "Sad",
      color: "bg-blue-100 text-blue-800",
      circle: "bg-blue-200 text-blue-800",
      count: data?.get_sad_count || 0
    },
    {
      name: "Fear",
      color: "bg-purple-100 text-purple-600",
      circle: "bg-purple-200 text-purple-600",
      count: data?.get_fear_count || 0
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 flex-col">
      <h5 className="text-lg font-bold text-gray-900 mb-4 md:mb-8 lg:mb-12">Mood Counter</h5>

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
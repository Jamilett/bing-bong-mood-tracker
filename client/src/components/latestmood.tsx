import { useQuery } from "@apollo/client";
import { QUERY_LATEST_FEELING } from '../../utils/queries';
import Angry from "../assets/Angry.svg";
import Anxious from "../assets/Anxious.svg";
import Fear from "../assets/Fear.svg";
import Happy from "../assets/Happy.svg";
import Sad from "../assets/Sad.svg";

function LatestMood() {
  const { data, loading, error } = useQuery(QUERY_LATEST_FEELING);

  const moods = [
    { name: "Happy", color: "bg-teal-100 text-teal-400", image: Happy },
    { name: "Angry", color: "bg-pink-100 text-pink-500", image: Angry },
    { name: "Anxious", color: "bg-indigo-100 text-indigo-400", image: Anxious },
    { name: "Sad", color: "bg-blue-100 text-blue-800", image: Sad },
    { name: "Fear", color: "bg-purple-100 text-purple-600", image: Fear },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const latest = data?.get_latest_feeling || {};
  const mood = moods.find((m) => m.name === latest.feeling_name);

  const latestMood = {
    name: mood?.name || "Unknown",
    color: mood?.color || "bg-gray-100 text-gray-500",
    image: mood?.image || "",
    date: latest.createdAt
    ? new Date(parseInt(latest.createdAt)).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "Unknown date",
    journal: latest.comment || "No journal entry available.",
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <h5 className="text-lg font-bold text-gray-900 mb-4">Latest Mood</h5>

      {/* Main container */}
      <div className="flex-col gap-8 p-2 min-[500px]:flex-col md:flex lg:flex-row md:p-4 lg:p-8">
        {/* Mood icon */}
        <div className="flex items-center justify-center">
          <img
            src={latestMood.image}
            alt={latestMood.name}
            className="w-32 h-32 object-contain"
            id="mood"
          />
        </div>

        {/* Text container */}
        <div className="flex-1">
          {/* Mood tag */}
          <span className={`${latestMood.color} text-xs px-3 py-1 rounded-lg`} id="tag">
            {latestMood.name}
          </span>

          {/* Journal title */}
          <h6 className="text-base font-semibold mt-3">Journal entry:</h6>

          {/* Journal description */}
          <p className="text-gray-600 text-md mt-3 text-justify" id="journal">
            {latestMood.journal}
          </p>
        </div>
      </div>

      {/* Date aligned to the right */}
      <div className="flex justify-end mt-6">
        <span className="text-gray-400 text-sm">{latestMood.date}</span>
      </div>
    </div>
  );
}

export default LatestMood;
import { useQuery } from "@apollo/client";
import { GET_TEN_COMMENTS } from '../../utils/queries';
import Angry from "../assets/angry.svg";
import Anxious from "../assets/Anxious.svg";
import Fear from "../assets/Fear.svg";
import Happy from "../assets/Happy.svg"; 
import Sad from "../assets/Sad.svg";

const moodImages: any = {
  Happy: Happy,
  Sad: Sad,
  Angry: Angry,
  Fear: Fear,
  Anxious: Anxious
};

function History() {
  const { loading, error, data } = useQuery(GET_TEN_COMMENTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const comments = data?.get_ten_comments || [];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between h-full">
      <h5 className="text-xl font-bold leading-none text-gray-900">
        Mood history
      </h5>

      <div className="py-6" id="history">
        {comments.map((comment: any, index: any) => (
          <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-8 md:gap-16">
              <span className="text-gray-500 text-sm w-20">{
                new Date(parseInt(comment.createdAt)).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                }</span>
              <img
                src={moodImages[comment.feeling_name] || Happy} // Default to Happy if no match
                alt={comment.feeling_name}
                className="w-20 h-20 object-contain"
              />
              <div className="hidden md:block text-lg font-semibold">
                <div>Journal entry:</div>
                <div className="text-sm text-gray-500 font-normal">{comment.comment}</div>
              </div>
            </div>

            <button className="bg-purple-600 hover:bg-purple-800 text-white px-3 py-2 rounded-lg text-sm justify-center flex items-center width-24 gap-2 ps-6">
              <div>Edit</div>
              <svg className="w-8 h-8 text-white-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M10.8952 1.04356L9.77765 2.2239L12.3503 4.94117L13.4671 3.76082C13.636 3.58242 13.7701 3.37061 13.8615 3.13749C13.9529 2.90438 14 2.65452 14 2.40219C14 2.14986 13.9529 1.9 13.8615 1.66688C13.7701 1.43376 13.636 1.22196 13.4671 1.04356C13.1204 0.694636 12.66 0.5 12.1811 0.5C11.7023 0.5 11.2418 0.694636 10.8952 1.04356Z"/>
                <path d="M11.3215 6.02776L8.74888 3.3105L5.31117 6.93838C5.20946 7.04561 5.1401 7.18225 5.11182 7.33107L4.72912 9.36901C4.70558 9.4931 4.71142 9.62142 4.74612 9.74255C4.78082 9.86369 4.84331 9.9739 4.92804 10.0634C5.01277 10.1529 5.11711 10.2189 5.2318 10.2555C5.34649 10.2922 5.46797 10.2984 5.58546 10.2735L7.51494 9.8662C7.65558 9.8362 7.78467 9.76294 7.886 9.65565L11.3215 6.02776Z"/>
                <path d="M5.31117 6.93838C5.20946 7.04561 5.1401 7.18225 5.11182 7.33107L4.72912 9.36901C4.70558 9.4931 4.71142 9.62142 4.74612 9.74255C4.78082 9.86369 4.84331 9.9739 4.92804 10.0634C5.01277 10.1529 5.11711 10.2189 5.2318 10.2555C5.34649 10.2922 5.46797 10.2984 5.58546 10.2735L7.51494 9.8662C7.65558 9.8362 7.78467 9.76294 7.886 9.65565L11.3215 6.02776L8.74888 3.3105L5.31117 6.93838Z"/>
                <path d="M8.58008 10.5532C8.37679 10.7676 8.11814 10.9138 7.83652 10.9736L5.26388 11.5169C5.02903 11.5664 4.78623 11.554 4.55702 11.4806C4.32781 11.4073 4.11929 11.2753 3.94994 11.0965C3.7806 10.9176 3.65567 10.6974 3.58624 10.4553C3.51681 10.2132 3.50503 9.95673 3.55194 9.70867L4.06632 6.99141C4.12291 6.69396 4.26135 6.42077 4.46429 6.20605L8.04387 2.42524C8.02397 2.3536 8.01368 2.27936 8.01332 2.2047H1.57662C1.15859 2.2051 0.757795 2.38068 0.462206 2.69288C0.166616 3.00509 0.000385278 3.42842 0 3.86994V12.8348C0.000385278 13.2763 0.166616 13.6996 0.462206 14.0118C0.757795 14.324 1.15859 14.4996 1.57662 14.5H10.0643C10.4823 14.4996 10.8831 14.324 11.1787 14.0118C11.4743 13.6996 11.6405 13.2763 11.6409 12.8348V7.32031L8.58008 10.5532Z"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
// import React, { useEffect, useState } from 'react';

function LatestMood () {
//   const [latestMood, setLatestMood] = useState<Mood | null>(null);

//   useEffect(() => {
//     fetch('/api/mood/latest')
//       .then(response => response.json())
//       .then(data => setLatestMood(data));
//   }, []);

  return (
    <div className="w-full">
        
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm w-full">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span className="w-fit bg-teal-100 text-teal-800 text-xs font-medium mb-3 px-2.5 py-0.5 rounded-full">Default</span>
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 white:text-white">Latest Mood</h5>
                <p className="mb-3 font-normal text-gray-500 white:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

    </div>
  );
}

export default LatestMood;
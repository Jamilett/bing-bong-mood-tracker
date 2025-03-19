import Sidebar from '../components/sidebar'
import Happy from '../assets/Happy.png'

function Moodlog() {
    const moods = [
        { name: "Happy", color: "bg-teal-100 text-teal-400", image: Happy},
        { name: "Angry", color: "bg-pink-100 text-pink-500", image: Happy},
        { name: "Anxious", color: "bg-indigo-100 text-indigo-400", image: Happy},
        { name: "Sad", color: "bg-blue-100 text-blue-600", image: Happy},
        { name: "Relaxed", color: "bg-purple-100 text-purple-600", image: Happy},
    ];

    return (
        <>
        <main className='bg-white flex flex-col items-center justify-center min-h-screen p-6'>
            <h2 className='text-2xl font-bold text-purple-600 text-center mb-6'>How do you feel today?</h2>

            {/* Mood Selection Grid */}
            <div className='grid grid-cols-3 gap-4'>
                {moods.map((mood) => (
                    <div key={mood.name} className={`flex flex-col items-center justify-center p-4 w-24 h-24 rounded-lg ${mood.color}`}>
                        <img src={mood.image} alt={mood.name} className="w-12 h-12" />
                        <span className='text-sm font-semibold'>{mood.name}</span>
                    </div>
                ))}
            </div>

            {/* Journal Section */}
            <div className="mt-6 w-full max-w-md">
                <label className="text-gray-800 font-semibold block mb-2">Write about your day</label>
                <textarea className="w-full h-24 p-3 border rounded-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Write text here ..." />
            </div>

            {/* Save Button */}
            <button type="button" className="mt-6 w-full max-w-md text-white bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Save daily mood
            </button>
        </main>
        </>
    )
}

export default Moodlog;
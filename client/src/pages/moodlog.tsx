import Sidebar from '../components/sidebar'
import Happy from '../assets/Happy.png'

function Moodlog() {
    const moods = [
        { name: "Happy", color: "bg-teal-100 text-teal-400", image: Happy},
        { name: "Angry", color: "bg-pink-100 text-pink-500", image: Happy},
        { name: "Anxious", color: "bg-indigo-100 text-indigo-400", image: Happy},
        { name: "Sad", color: "bg-blue-100 text-blue-800", image: Happy},
        { name: "Fear", color: "bg-purple-100 text-purple-600", image: Happy},
      ];

    return (
        <>
        <main className='bg-purple-50'>
            <div>
                <Sidebar />
            </div>
            <section className='flex flex-col p-4 gap-4 sm:ml-64 h-screen'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-900'>Moodlog</h2>
                </div>

                <div className='flex-grow bg-white rounded-lg shadow-sm p-8 items-center justify-center p-6 flex flex-col'>

                    <div className='text-purple-600 text-3xl font-semibold mt-2 mb-12 md:mt-6 lg:mt-auto'> How do you feel today?</div>

                    {/* Mood Selection Grid */}    
                    <div className="grid gap-8 lg:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {moods.map((mood) => (
                            <div key={mood.name} className={`p-4 w-[120px] flex flex-col items-center justify-center ${mood.color} rounded-lg shadow-md`}>
                                <span className="text-base font-semibold">{mood.name}</span>
                                <img key={mood.name} src={mood.image} alt={mood.name} className="w-16 h-16 object-contain" />
                            </div>
                        ))}
                    </div>

                    <div className='w-full max-w-md mt-16 mb-4 md:mb-12 lg:mb-12'>
                        <label htmlFor="message" className="block mb-2 text-sm text-xl font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-600 focus:border-purple-600" placeholder="Write your thoughts here..."></textarea>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-auto w-full max-w-md mb-12">
                        <button type="button" className="md:w-sm w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Save daily mood
                        </button>
                    </div> 

                </div>
            </section>
        </main>
        </>
    )
}

export default Moodlog;
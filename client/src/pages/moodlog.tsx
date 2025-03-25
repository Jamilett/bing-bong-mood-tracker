import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MOOD } from '../../utils/mutations';
import Sidebar from '../components/sidebar'
import Happy from '../assets/Happy.svg'
import Angry from '../assets/Angry.svg'
import Anxious from '../assets/Anxious.svg'
import Sad from '../assets/Sad.svg'
import Fear from '../assets/Fear.svg'

function Moodlog() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
    const [journalEntry, setJournalEntry] = useState('');
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveMood] = useMutation(ADD_MOOD);

    const moods = [
        { name: "Happy", color: "bg-teal-100 text-teal-400", image: Happy},
        { name: "Angry", color: "bg-pink-100 text-pink-500", image: Angry},
        { name: "Anxious", color: "bg-indigo-100 text-indigo-400", image: Anxious},
        { name: "Sad", color: "bg-blue-100 text-blue-800", image: Sad},
        { name: "Fear", color: "bg-purple-100 text-purple-600", image: Fear},
      ];
    
      const handleSaveMood = async () => {
        if (!selectedMood || !journalEntry) return;

        try {
            await saveMood({
                variables: {
                    moodData: {
                        feeling_name: selectedMood,
                        comment: journalEntry,
                    },
                },
            });
            setSelectedMood(null);
            setJournalEntry('');
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (err) {
            console.error('Error saving mood:', err);
        }
    };

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
                    <div className="grid gap-4 lg:gap-8 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {moods.map((mood) => (
                                 <div
                                    key={mood.name}                    
                                    className={`p-4 w-[120px] flex flex-col gap-1 items-center justify-center ${mood.color} rounded-lg shadow-md hover:rotate-10 cursor-pointer 
                                    ${selectedMood === mood.name ? `border-3 border-current ${mood.color.split(' ')[1]}` : ''}`}                    
                                    onClick={() => setSelectedMood(selectedMood === mood.name ? null : mood.name)}                                        
                                >                                         
                                <span className="text-base font-semibold">{mood.name}</span>
                                <img key={mood.name} src={mood.image} alt={mood.name} className="w-16 h-16 object-contain" />
                            </div>
                        ))}
                    </div>

                    <div className='w-full max-w-md mt-16 mb-4 md:mb-12 lg:mb-12'>
                        <label htmlFor="message" className="block mb-2 text-sm text-xl font-medium text-gray-900">Journal</label>
                        <textarea
                          id="message"
                          rows={4}
                          value={journalEntry}
                          onChange={(e) => setJournalEntry(e.target.value)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-600 focus:border-purple-600"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    
                    {saveSuccess && (
                      <div className="text-green-600 font-medium mb-4">
                        Mood and journal entry saved successfully!
                      </div>
                    )}
                    <div className="flex flex-col justify-center items-center mt-auto w-full max-w-md mb-12">
                    <button
                          type="button"
                          onClick={handleSaveMood}
                          className="hover:cursor-pointer md:w-sm w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
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
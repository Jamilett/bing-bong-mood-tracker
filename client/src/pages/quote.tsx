import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_QUOTE } from '../../utils/mutations';
import Sidebar from '../components/sidebar';
import type { Quote } from '../models/Quotes';

function Quote() {
    const { loading, error, data, refetch } = useQuery(GET_QUOTE);
    const [quote, setQuote] = useState<Quote | null>(null);

    // Update the quote state when data changes
    if (data && !quote) {
        setQuote(data.getQuote);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const fetchNewQuote = async () => {
        const { data } = await refetch(); 
        setQuote(data.getQuote);
    };

    return (
        <>
            <main className='bg-purple-50'>
                <div>
                    <Sidebar />
                </div>
                <section className='flex flex-col p-4 gap-4 sm:ml-64 h-screen'>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-900'>Quotes</h2>
                    </div>

                    {/* Main content */}
                    <div className='flex-grow bg-white rounded-lg shadow-sm p-8 place-content-center flex flex-col'>
                        <div className='flex flex-col items-center justify-center gap-4 mt-auto'>
                            {quote && (
                                <>
                                    <span className='text-3xl font-extralight text-center'>"{quote.text}"</span>
                                    <span className='text-xl font-semibold'>- {quote.author}</span>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col justify-center items-center mt-auto mb-12">
                            <button
                                type="button"
                                onClick={fetchNewQuote}
                                className="hover:cursor-pointer md:w-sm w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Try another quote
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Quote;
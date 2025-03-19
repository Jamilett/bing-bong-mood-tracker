import Sidebar from '../components/sidebar'

function Quote() {
    const quotes = [
        { text: "Placeholder text for an awesome inspiring quote", author: "BingBong" }
    ];

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
                        {quotes.map((quote) => (
                            <span className='text-3xl font-extralight text-center'>"{quote.text}"</span>
                        ))}
                        {quotes.map((quote) => (
                            <span className='text-xl font-semibold'>-{quote.author}</span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center mt-auto">
                        <button type="button" className="md:w-sm w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Try other quote
                        </button>
                    </div>                
                    </div>
            </section>
        </main>
        </>
    )
}

export default Quote;
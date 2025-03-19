import logo from '../assets/BingBongLogo.svg';
import dashboard from '../assets/DashboardMockup.png';

function Landing() {
  

    return (
      <>
        <main>

        <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 light:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">BingBong</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 light:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 light:hover:bg-gray-700 focus:outline-none light:focus:ring-gray-800">Log in</a>
                <a href="#" className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">Get started</a>
            </div>
        </div>
    </nav>
</header>

        <section className="bg-purple-50 light:bg-purple-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl light:text-white text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-purple-400">Track Your Mood, Discover Your Patterns</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 light:text-gray-400">“Log your daily emotions, write your private journal, and gain insights into your well-being over time.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="gap-3 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-100 light:text-white light:border-gray-700 light:hover:bg-gray-700 light:focus:ring-gray-800">
                Sign up
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>          
            </a>  
        </div>
    </div>
</section>
            
<section className="bg-purple-200 light:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full light:hidden rounded-lg" src={dashboard} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-600 light:text-white">Gain real insights of your mood</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg light:text-gray-400">Your personal dashboard gives you a full view of your emotional patterns. Keep track of your moods and discover trends over time.</p>
            <a href="#" className="gap-3 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-100 light:text-white light:border-gray-700 light:hover:bg-gray-700 light:focus:ring-gray-800">
                Try now
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>          
            </a>  
        </div>
    </div>
</section>


<section className="bg-purple-50 light:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-600 light:text-white">Designed for individuals</h2>
          <p className="text-gray-500 sm:text-xl light:text-gray-400">BingBong focuses on individuals who are in constant self improvement journey.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className='bg-white py-6 px-6 rounded-lg'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 light:bg-primary-900">
                  <svg className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6 light:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold light:text-white">Log Your Mood Daily</h3>
              <p className="text-gray-500 light:text-gray-400">Select a face doodle & write a journal entry.</p>
          </div>
          <div className='bg-white py-6 px-6 rounded-lg'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 light:bg-primary-900">
                  <svg className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6 light:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold light:text-white">Find Inspiration</h3>
              <p className="text-gray-500 light:text-gray-400">Browse motivational quotes to lift your spirits.</p>
          </div>
          <div className='bg-white py-6 px-6 rounded-lg'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 light:bg-primary-900">
              <svg className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6 light:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold light:text-white">View your progress</h3>
              <p className="text-gray-500 light:text-gray-400">Reflect on your past moods and progress.</p>
          </div>
      </div>
  </div>
</section>




<section className="bg-purple-50 light:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl light:text-white">Free... Forever!</h2>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 light:text-gray-400">Join BingBong for free and take the first step toward emotional well-being.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 light:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>


<section className="bg-purple-50 light:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 light:text-white">Our team</h2>
          <p className="font-light text-gray-500 sm:text-xl light:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Mike Aliaga</a>
              </h3>
              <p>UX/UI, Front end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Alessandro</a>
              </h3>
              <p>Front end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Carlos Malpica</a>
              </h3>
              <p>Front end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Jam</a>
              </h3>
              <p>Back end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Fabian</a>
              </h3>
              <p>Back end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Alberto</a>
              </h3>
              <p>Back end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 light:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                  <a href="#">Gerardo</a>
              </h3>
              <p>Back end Dev </p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 light:hover:text-white light:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
      </div>  
  </div>
</section>



<footer className="p-4 bg-purple-200 md:p-8 lg:p-10 light:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 light:text-white">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          BingBong    
      </a>
      <span className="text-sm text-gray-500 sm:text-center light:text-gray-400">© 2025 <a href="#" className="hover:underline">BingBong™</a>. All Rights Reserved.</span>
  </div>
</footer>

        </main>
      </>
    );
  }
  
  export default Landing;
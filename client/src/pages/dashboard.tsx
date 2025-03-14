import Sidebar from '../components/sidebar'
import LatestMood from '../components/latestmood';
import Sevendays from '../components/sevendays';
import Month from '../components/month';
import Alltime from '../components/alltime';
import MoodCounter from '../components/moodcounter';
import History from '../components/history';

function Dashboard() {
  

    return (
      <>
        <main className='bg-purple-50 min-h-screen'>
            <div>
                <Sidebar />
            </div>
            <section className='flex flex-col p-4 gap-4'>
                <div className='sm:ml-64 flex gap-4'>
                    <Sevendays />
                    <Month />
                    <Alltime />
                </div>
                <div className='sm:ml-64 flex gap-4'>
                    <MoodCounter />
                    <LatestMood />
                </div>
                <div className='sm:ml-64'>
                    <History />
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default Dashboard;
  
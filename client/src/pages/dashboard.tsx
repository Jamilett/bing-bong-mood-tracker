import Sidebar from '../components/sidebar'
import LatestMood from '../components/latestmood';

function Dashboard() {
  

    return (
      <>
        <main>
            <div>
                <Sidebar />
            </div>
            <div className='p-4 sm:ml-64'>
                <LatestMood />
            </div>
        </main>
      </>
    )
  }
  
  export default Dashboard;
  
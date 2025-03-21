import Sidebar from "../components/sidebar";
import LatestMood from "../components/latestmood";
import Sevendays from "../components/sevendays";
import Month from "../components/month";
import Alltime from "../components/alltime";
import MoodCounter from "../components/moodcounter";
import History from "../components/history";

function Dashboard() {
  return (
    <>
      <main className="bg-purple-50 min-h-screen">
        <div>
          <Sidebar />
        </div>

        <section className="flex flex-col p-4 gap-4 sm:ml-64">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>

          {/* Secciones en una sola columna en móviles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Sevendays />
            <Month />
            <Alltime />
          </div>

          {/* Secciones en móvil 1 por fila y 2 columnas en desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MoodCounter />
            <LatestMood />
          </div>

          <div>
            <History />
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;

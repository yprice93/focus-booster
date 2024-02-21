import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <div className="container flex flex-col justify-center h-1/3 w-1/4 text-center bg-slate-50 px-4">
        <h1 className="font-mono">Focus Booster</h1>
        <Link
          to="main"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Home;

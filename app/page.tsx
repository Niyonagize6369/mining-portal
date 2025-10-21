// app/page.tsx
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
// You will need to install react-icons: npm install react-icons

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome, Bonae Ineza
        </h1>
        <p className="text-xl text-yellow-600 mb-6">
          NGALI MINING Operations Portal
        </p>

        <p className="text-gray-600 mb-8">
          This is the entry point for strategic oversight and high-level
          decision-making.
        </p>

        <Link href="/dashboard" passHref>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-600 transition duration-150 ease-in-out cursor-pointer">
            <MdOutlineDashboard className="w-5 h-5 mr-2" />
            Go to Executive Dashboard
          </div>
        </Link>

        <p className="mt-8 text-sm text-gray-400">
          You are logged in as Managing Director.
        </p>
      </div>
    </div>
  );
}

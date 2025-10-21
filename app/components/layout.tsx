// components/Layout.tsx
import Sidebar from "./Sidebar";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Header = ({ title }) => (
  <header className="flex justify-between items-center p-4 bg-white border-b sticky top-0 z-10">
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    <div className="flex items-center space-x-4">
      <FiSearch className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
      <FiBell className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
      <div className="flex items-center space-x-2">
        <div className="text-right">
          <p className="text-sm font-semibold">Bonae Ineza</p>
          <p className="text-xs text-gray-500">Managing Director</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          BI
        </div>
      </div>
    </div>
  </header>
);

export default function Layout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header title={title} />
        <div className="p-8 flex-grow">{children}</div>
      </main>
    </div>
  );
}

// NOTE: You would typically wrap your main pages (like app/dashboard/page.jsx)
// with this Layout component.

"'use client';"
// components/Sidebar.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard, MdOutlineReport } from "react-icons/md";
import { FiCheckCircle, FiClock, FiSettings, FiUser } from "react-icons/fi";

const navItems = [
  {
    category: "EXECUTIVE PORTAL",
    links: [
      { name: "Pending Approvals", href: "/pending-approvals", icon: FiClock },
      {
        name: "Approved Requisitions",
        href: "/approved-requisitions",
        icon: FiCheckCircle,
      },
    ],
  },
  {
    category: "EXECUTIVE DASHBOARD",
    links: [
      {
        name: "Executive Overview",
        href: "/dashboard",
        icon: MdOutlineDashboard,
      },
    ],
  },
  {
    category: "REPORTS",
    links: [
      { name: "Analytics & Exports", href: "/reports", icon: MdOutlineReport },
    ],
  },
];

const SidebarItem = ({ name, href, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeClasses = "bg-yellow-500 text-gray-900 font-semibold shadow-md";
  const inactiveClasses = "text-gray-400 hover:bg-gray-700/50 hover:text-white";

  return (
    <Link
      href={href}
      className={`flex items-center p-3 rounded-lg transition-colors duration-200 text-sm ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {name}
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        NGALI MINING
      </div>

      <div className="flex-grow p-4 space-y-6">
        {navItems.map((section, index) => (
          <div key={index}>
            <p className="text-xs font-semibold uppercase text-gray-400 mb-2 tracking-wider">
              {section.category}
            </p>
            <nav className="space-y-1">
              {section.links.map((item) => (
                <SidebarItem key={item.name} {...item} />
              ))}
            </nav>
          </div>
        ))}

        <div className="pt-6 border-t border-gray-700 space-y-2">
          <p className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
            PROFILE SETTINGS
          </p>
          <Link
            href="/settings"
            className="flex items-center p-3 rounded-lg transition-colors duration-200 text-sm text-gray-400 hover:bg-gray-700/50 hover:text-white"
          >
            <FiSettings className="w-5 h-5 mr-3" />
            Account Settings
          </Link>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-700 bg-gray-900 flex items-center">
        <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white text-lg font-bold mr-3">
          BI
        </div>
        <div>
          <p className="text-sm font-semibold">Bonae Ineza</p>
          <p className="text-xs text-gray-400">Managing Director</p>
          <button className="text-xs text-red-400 hover:text-red-300 mt-1">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

// NOTE: For Next.js App Router, you need to add 'use client' at the top of Sidebar.jsx
// because it uses 'usePathname'.

// app/reports/page.tsx
import Layout from "../components/layout";
import React from "react"; // Import React for component typing
import { IconType } from "react-icons"; // Type for icons
import {
  FiDownload,
  FiBarChart2,
  FiFileText,
  FiCalendar,
  FiDollarSign,
  FiZap,
} from "react-icons/fi";
import { MdInsertDriveFile, MdAccessTime, MdOutlineWork } from "react-icons/md"; // Added missing MdOutlineWork

// --- 1. Define Prop Types for ReportMetricCard ---
interface ReportMetricCardProps {
  title: string;
  value: string;
  unit?: string; // unit is optional in one case
  icon: IconType; // IconType is the correct type for react-icons components
  colorClass: string;
}

const ReportMetricCard: React.FC<ReportMetricCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  colorClass,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between border-l-4 border-gray-100">
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
    <p className="text-3xl font-bold text-gray-900">
      {value}
      {unit && (
        <span className="text-base font-normal text-gray-500 ml-1">{unit}</span>
      )}
    </p>
  </div>
);

// --- 2. Define Prop Types for ReportItem ---
interface ReportItemProps {
  title: string;
  summary: string;
  generated: string;
  size: string;
  format: string;
}

const ReportItem: React.FC<ReportItemProps> = ({
  title,
  summary,
  generated,
  size,
  format,
}) => (
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div>
      <div className="flex items-center space-x-2 mb-1">
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800">
          READY
        </span>
      </div>
      <p className="text-sm text-gray-500">{summary}</p>
      <p className="text-xs text-gray-400 mt-1">
        Generated: {generated} • Size: {size} • Format: {format}
      </p>
    </div>
    <div className="flex space-x-3">
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
        Preview
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-colors flex items-center">
        <FiDownload className="w-4 h-4 mr-2" /> Download
      </button>
    </div>
  </div>
);

// --- 3. Define Prop Types for ActivityItem ---
interface ActivityItemProps {
  description: string;
  time: string;
  user: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  description,
  time,
  user,
}) => (
  <div className="flex items-start space-x-3 py-2 border-b last:border-b-0 border-gray-100">
    <MdAccessTime className="w-5 h-5 text-gray-400 mt-1" />
    <div>
      <p className="text-sm text-gray-700 font-medium">{description}</p>
      <p className="text-xs text-gray-500">
        {time} by {user}
      </p>
    </div>
  </div>
);

// --- 4. Main Page Component ---
// Note: This is a Server Component by default in Next.js 13+ App Router
export default function ReportsPage() {
  const reports: ReportItemProps[] = [
    // Added type for the reports array
    {
      title: "Executive Summary Report",
      summary: "High-level overview of all operations and key metrics",
      generated: "2025-01-15",
      size: "3.2 MB",
      format: "PDF",
    },
    {
      title: "Financial Performance Report",
      summary: "Budget analysis, spending trends, and financial forecasts",
      generated: "2025-01-14",
      size: "2.8 MB",
      format: "Excel",
    },
    {
      title: "Strategic Planning Report",
      summary: "Long-term operational planning and resource allocation",
      generated: "2025-01-12",
      size: "4.1 MB",
      format: "PDF",
    },
  ];

  return (
    // Assuming Layout component is correctly typed
    <Layout title="Executive Reports">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Strategic overview, financial summaries, and executive dashboards
      </h2>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <ReportMetricCard
          title="Total Budget Utilized"
          value="$35,400"
          icon={FiDollarSign}
          colorClass="text-red-500"
        />
        <ReportMetricCard
          title="Departments Managed"
          value="12"
          icon={MdOutlineWork} // Correctly imported MdOutlineWork
          colorClass="text-blue-500"
        />
        <ReportMetricCard
          title="Monthly ROI"
          value="15.2"
          unit="%"
          icon={FiBarChart2}
          colorClass="text-green-500"
        />
        <ReportMetricCard
          title="System Efficiency"
          value="92"
          unit="%"
          icon={FiZap}
          colorClass="text-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Reports */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Available Reports
            </h3>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              Create Custom Report
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Generated reports ready for download
          </p>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <ReportItem key={index} {...report} />
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer p-2 rounded-lg hover:bg-blue-50">
                <MdInsertDriveFile className="w-5 h-5 mr-3" />
                Executive Summary
              </div>
              <div className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer p-2 rounded-lg hover:bg-blue-50">
                <FiFileText className="w-5 h-5 mr-3" />
                Strategic Overview
              </div>
              <div className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer p-2 rounded-lg hover:bg-blue-50">
                <FiCalendar className="w-5 h-5 mr-3" />
                Custom Report
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">
              Recent Activity
            </h3>
            <div className="space-y-2">
              <ActivityItem
                description="Executive Summary Report downloaded"
                time="2 hours ago"
                user="Bonae Ineza"
              />
              <ActivityItem
                description="Financial Performance Report generated"
                time="1 day ago"
                user="System"
              />
              <ActivityItem
                description="Custom report created"
                time="3 days ago"
                user="Bonae Ineza"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

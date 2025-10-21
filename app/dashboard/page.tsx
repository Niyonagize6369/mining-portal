// app/dashboard/page.tsx
import Layout from "../components/layout";
import React from "react"; // Import React for component typing
import { IconType } from "react-icons"; // Type for react-icons
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import {
  MdMonetizationOn,
  MdTrendingUp,
  MdOutlineWork,
  MdPeople,
} from "react-icons/md";

// --- 1. Define Prop Types for MetricCard ---
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: IconType; // Type for the icon component
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color,
}) => (
  <div
    className="bg-white p-6 rounded-xl shadow-md flex items-start justify-between border-l-4"
    style={{ borderColor: color }}
  >
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      <div
        className={`flex items-center mt-2 text-sm ${
          change.startsWith("+") ? "text-green-600" : "text-red-600"
        }`}
      >
        {change.startsWith("+") ? (
          <FiArrowUp className="w-4 h-4 mr-1" />
        ) : (
          <FiArrowDown className="w-4 h-4 mr-1" />
        )}
        {change}
      </div>
    </div>
    <Icon className="w-8 h-8 text-gray-300" />
  </div>
);

// --- 2. Define Prop Types for ApprovalItem ---
interface ApprovalItemProps {
  id: string;
  priority: "High-priority" | "Medium" | "Low";
  title: string;
  value: string;
  details: string;
}

const ApprovalItem: React.FC<ApprovalItemProps> = ({
  id,
  priority,
  title,
  value,
  details,
}) => (
  <div className="flex justify-between items-start border-b p-4 hover:bg-gray-50 transition duration-150">
    <div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-800">{id}</span>
        <span
          className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
            priority === "High-priority"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {priority}
        </span>
      </div>
      <p className="text-lg font-semibold text-gray-900 mt-1">{title}</p>
      <p className="text-sm text-gray-500">{details}</p>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-xl font-bold text-gray-800">{value}</span>
      <div className="space-x-2 mt-2">
        <button className="px-4 py-1.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
          Approve
        </button>
        <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
          Reject
        </button>
      </div>
    </div>
  </div>
);

// --- 3. Define Prop Types for OverviewItem ---
interface OverviewItemProps {
  title: string;
  value: string | number; // Value can be a number (like 8, 12, 3) or a string ("Achieved")
  percentage?: number; // Optional percentage
  isGoal?: boolean; // Optional boolean
}

const OverviewItem: React.FC<OverviewItemProps> = ({
  title,
  value,
  percentage,
  isGoal,
}) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100">
    <p className="text-gray-600">{title}</p>
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-gray-800">{value}</span>
      {isGoal &&
        percentage !== undefined && ( // Check if isGoal is true AND percentage is provided
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              percentage >= 80
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {percentage}%
          </span>
        )}
    </div>
  </div>
);

// --- 4. Main Page Component ---
export default function ExecutiveDashboardPage() {
  return (
    <Layout title="Executive Dashboard">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Strategic oversight and high-level approvals
      </h2>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Monthly Revenue"
          value="$125,000"
          change="+12%"
          icon={MdMonetizationOn}
          color="#f59e0b"
        />
        <MetricCard
          title="Production Efficiency"
          value="87%"
          change="+5%"
          icon={MdTrendingUp}
          color="#10b981"
        />
        <MetricCard
          title="Active Projects"
          value="24"
          change="+3"
          icon={MdOutlineWork}
          color="#3b82f6"
        />
        <MetricCard
          title="Team Performance"
          value="92%"
          change="+8%"
          icon={MdPeople}
          color="#ef4444"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Executive Approvals */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">
            • Executive Approvals Required
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            High-value decisions requiring your authorization
          </p>

          <div className="divide-y divide-gray-100">
            <ApprovalItem
              id="REQ-001"
              priority="High-priority"
              title="Major Equipment Purchase"
              value="$85,000"
              details="New cutting machinery for increased production • By Operations Director • 2025-01-15"
            />
            <ApprovalItem
              id="REQ-002"
              priority="Medium"
              title="Gold Procurement Contract"
              value="$245,000"
              details="Quarterly raw materials acquisition • By Finance Director • 2025-01-14"
            />
            <ApprovalItem
              id="REQ-003"
              priority="Low"
              title="Team Training Program"
              value="$12,500"
              details="Advanced jewelry crafting certification • By HR Manager • 2025-01-13"
            />
          </div>
        </div>

        {/* Today's Overview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">
            Today's Overview
          </h3>
          <div className="space-y-1">
            <OverviewItem title="Pending Decisions" value={8} />
            <OverviewItem title="Active Operations" value={12} />
            <OverviewItem title="Team Alerts" value={3} />
            <OverviewItem
              title="Revenue Target"
              value="Achieved"
              percentage={87}
              isGoal={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

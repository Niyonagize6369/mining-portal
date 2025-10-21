// app/pending-approvals/page.tsx
import Layout from "../components/layout";
import React from "react"; // Import React for component typing
import { IconType } from "react-icons"; // Type for react-icons
import {
  FiClock,
  FiAlertTriangle,
  FiDollarSign,
  FiZap,
  FiTruck,
} from "react-icons/fi"; // Added FiTruck just in case, though not used here

// --- 1. Define Prop Types for SummaryCard ---
interface SummaryCardProps {
  title: string;
  value: string;
  unit: string;
  icon: IconType;
  color: string; // The color property is unused in the provided code logic, but keeping it for completeness
  isDanger?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  isDanger = false,
}) => (
  <div
    className={`flex flex-col p-6 rounded-xl shadow-md ${
      isDanger ? "bg-red-50 border-red-400" : "bg-white border-gray-200"
    } border-l-4`}
  >
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <Icon
        className={`w-5 h-5 ${isDanger ? "text-red-500" : "text-yellow-500"}`}
      />
    </div>
    <p className="text-3xl font-bold text-gray-900 mt-1">
      {value}{" "}
      <span className="text-base font-normal text-gray-500">{unit}</span>
    </p>
  </div>
);

// --- 2. Define Types for Requisition Data Structures ---
interface RequisitionItemDetail {
  name: string;
  qty: number;
  value: number;
}

interface RequisitionItemProps {
  id: string;
  priority: "HIGH PRIORITY" | "MEDIUM PRIORITY" | "LOW PRIORITY";
  department: string;
  items: RequisitionItemDetail[];
  submitted: string;
  stoppage: boolean;
  value: number;
  itemsCount: number;
}

const RequisitionItem: React.FC<RequisitionItemProps> = ({
  id,
  priority,
  department,
  items,
  submitted,
  stoppage,
  value,
  itemsCount,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold text-gray-800">{id}</span>
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full ${
            priority === "HIGH PRIORITY"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {priority}
        </span>
      </div>
      <span className="text-lg font-bold text-gray-800">
        ${value.toLocaleString()}
      </span>
    </div>

    <div className="pt-4 text-sm text-gray-600 space-y-2">
      <p>
        <span className="font-semibold text-gray-800">{department}</span>
      </p>
      <p>
        <span className="text-gray-500">Submitted:</span>{" "}
        <span>{submitted}</span>
      </p>
      {stoppage && (
        <p className="flex items-center text-red-600 font-medium">
          <FiAlertTriangle className="w-4 h-4 mr-1" /> Production stoppage risk
        </p>
      )}
    </div>

    <div className="mt-4 text-sm">
      <p className="font-semibold mb-2">Requested Items ({itemsCount}):</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} (Qty: {item.qty}) - ${item.value.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 flex space-x-3">
      <button className="px-5 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
        Review Details
      </button>
      <button className="px-5 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors flex items-center">
        Sign & Approve
      </button>
      <button className="px-5 py-2 text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
        Reject
      </button>
    </div>
  </div>
);

// --- 3. Main Page Component ---
export default function PendingApprovalsPage() {
  const requisitions: RequisitionItemProps[] = [
    // Applied type to the data array
    {
      id: "REQ-2025-001",
      priority: "HIGH PRIORITY",
      department: "Diamond Cutting - Supervisor",
      submitted: "2025-01-15 09:30",
      stoppage: true,
      value: 14100,
      itemsCount: 2,
      items: [
        {
          name: "Diamond Cutting Blade - Industrial Grade",
          qty: 5,
          value: 12500,
        },
        { name: "Precision Measuring Tools Set", qty: 2, value: 1600 },
      ],
    },
    {
      id: "REQ-2025-002",
      priority: "MEDIUM PRIORITY",
      department: "Gold Processing Unit - Processing Lead",
      submitted: "2025-01-14 14:20",
      stoppage: false,
      value: 6300,
      itemsCount: 2,
      items: [
        { name: "Gold Refining Chemicals", qty: 10, value: 4500 },
        { name: "Safety Equipment - Protective Gear", qty: 15, value: 1800 },
      ],
    },
  ];

  return (
    <Layout title="Pending Approvals">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Requisitions requiring operations review and approval
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <SummaryCard
          title="Pending Review"
          value="3"
          unit=""
          icon={FiClock}
          color="#f59e0b"
        />
        <SummaryCard
          title="High Priority"
          value="1"
          unit=""
          icon={FiAlertTriangle}
          color="#ef4444"
          isDanger={true}
        />
        <SummaryCard
          title="Total Value"
          value="3,500"
          unit="$"
          icon={FiDollarSign}
          color="#10b981"
        />
        <SummaryCard
          title="Avg. Processing"
          value="2.5"
          unit="Hrs"
          icon={FiZap}
          color="#3b82f6"
        />
      </div>

      {/* Requisitions List */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Requisitions Awaiting Your Approval
        </h3>
        <p className="text-sm text-gray-500">
          Review details and provide digital signature for approval
        </p>

        {requisitions.map((req) => (
          <RequisitionItem key={req.id} {...req} />
        ))}
      </div>
    </Layout>
  );
}

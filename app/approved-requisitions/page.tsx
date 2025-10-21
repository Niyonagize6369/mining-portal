// app/approved-requisitions/page.jsx
import Layout from "@/components/Layout";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiTruck,
  FiDollarSign,
  FiDownload,
} from "react-icons/fi";
import { MdDone } from "react-icons/md";

const StatusCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center border-l-4 border-gray-100">
    <div className="flex items-center space-x-3 mb-2">
      <Icon className={`w-6 h-6 ${colorClass}`} />
      <p className="text-sm font-medium text-gray-500">{title}</p>
    </div>
    <p className="text-3xl font-bold text-gray-900">
      {title.includes("Total Value") ? `$${value.toLocaleString()}` : value}
    </p>
  </div>
);

const ApprovedRequisitionItem = ({
  id,
  status,
  department,
  items,
  requestedBy,
  approvedDate,
  value,
  itemsCount,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center space-x-3">
          <span className="text-lg font-semibold text-gray-800">{id}</span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              status === "In-Procurement"
                ? "bg-blue-100 text-blue-800"
                : status === "Delivered"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status}
          </span>
          {status === "In-Procurement" && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
              HIGH
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-2">{department}</p>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-gray-800">
          ${value.toLocaleString()}
        </span>
        <p className="text-sm text-gray-500">{itemsCount} items</p>
      </div>
    </div>

    <div className="mt-4 text-sm text-gray-600 space-y-1 border-b pb-4">
      <p>
        <span className="text-gray-500">Requested by:</span>{" "}
        <span>{requestedBy}</span>
      </p>
      <p>
        <span className="text-gray-500">Approved by:</span>{" "}
        <span>Operations Director, Managing Director</span>
      </p>
      <p>
        <span className="text-gray-500">Approved:</span>{" "}
        <span>{approvedDate}</span>
        {status === "Delivered" && (
          <span className="ml-4">
            <span className="text-gray-500">Delivered:</span> 2025-01-16
          </span>
        )}
      </p>
    </div>

    <div className="mt-4 text-sm">
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} (Qty: {item.qty}) - ${item.value.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 flex space-x-3">
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
        View Details
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
        Track Status
      </button>
      <button className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
        Receipt
      </button>
    </div>
  </div>
);

export default function ApprovedRequisitionsPage() {
  const requisitions = [
    {
      id: "REQ-2025-001",
      status: "In-Procurement",
      department: "Diamond Cutting Department",
      requestedBy: "James Thompson",
      approvedDate: "2025-01-15",
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
      status: "Delivered",
      department: "Gold Processing Unit",
      requestedBy: "Sarah Mitchell",
      approvedDate: "2025-01-14",
      value: 6300,
      itemsCount: 2,
      items: [
        { name: "Gold Refining Chemicals", qty: 10, value: 4500 },
        { name: "Safety Equipment - Protective Gear", qty: 15, value: 1800 },
      ],
    },
  ];

  return (
    <Layout title="Approved Requisitions">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Track status of approved requisitions and procurement progress
      </h2>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatusCard
          title="Total Approved"
          value="4"
          icon={FiCheckCircle}
          colorClass="text-green-500"
        />
        <StatusCard
          title="In Procurement"
          value="1"
          icon={FiShoppingCart}
          colorClass="text-blue-500"
        />
        <StatusCard
          title="Delivered"
          value="3"
          icon={FiTruck}
          colorClass="text-green-600"
        />
        <StatusCard
          title="Total Value"
          value={32100}
          icon={FiDollarSign}
          colorClass="text-gray-800"
        />
      </div>

      {/* Filter and Search */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6">
        <input
          type="text"
          placeholder="Search by requisition ID, department, or requestor..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
        />
        <button className="flex items-center ml-4 px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors">
          <MdDone className="w-5 h-5 mr-1" /> Filter
        </button>
      </div>

      {/* History */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Approved Requisitions History
        </h3>
        <p className="text-sm text-gray-500">
          Complete record of approved requisitions and their status
        </p>

        {requisitions.map((req) => (
          <ApprovedRequisitionItem key={req.id} {...req} />
        ))}
      </div>

      <button className="flex items-center mt-6 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
        <FiDownload className="w-4 h-4 mr-2" /> Export Report
      </button>
    </Layout>
  );
}

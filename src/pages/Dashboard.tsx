import React from 'react';
import VendorMetrics from '../components/Dashboard/VendorMetrics';
import TaskOverview from '../components/Dashboard/TaskOverview';
import SpendingChart from '../components/Dashboard/SpendingChart';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add New Vendor
        </button>
      </div>

      <VendorMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskOverview />
        <SpendingChart />
      </div>
    </div>
  );
}
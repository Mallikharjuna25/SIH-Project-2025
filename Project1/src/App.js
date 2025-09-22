import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import IssuesTable from './components/IssuesTable';
import Filters from './components/Filters';
import { mockIssues } from './data/mockData';

function App() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all'
  });

  useEffect(() => {
    setIssues(mockIssues);
    setFilteredIssues(mockIssues);
  }, []);

  useEffect(() => {
    let filtered = issues;

    if (filters.category !== 'all') {
      filtered = filtered.filter(issue => issue.category === filters.category);
    }

    if (filters.status !== 'all') {
      filtered = filtered.filter(issue => issue.status === filters.status);
    }

    setFilteredIssues(filtered);
  }, [issues, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleStatusUpdate = (issueId, newStatus) => {
    setIssues(prev => 
      prev.map(issue => 
        issue.id === issueId 
          ? { ...issue, status: newStatus, updatedAt: new Date().toISOString() }
          : issue
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-gray-600">Monitor and manage civic issues in your community</p>
            </div>

            <StatCards issues={filteredIssues} />

            <div className="mt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Issues Management</h2>
                <Filters 
                  filters={filters} 
                  onFilterChange={handleFilterChange}
                />
              </div>
              
              <IssuesTable 
                issues={filteredIssues} 
                onStatusUpdate={handleStatusUpdate}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

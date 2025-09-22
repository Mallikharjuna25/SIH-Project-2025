import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const categories = [
    'all',
    'Roads',
    'Water',
    'Sanitation',
    'Electricity',
    'Parks',
    'Traffic',
    'Public Safety',
    'Environment'
  ];

  const statuses = [
    'all',
    'pending',
    'in-progress',
    'resolved'
  ];

  const handleCategoryChange = (e) => {
    onFilterChange({ category: e.target.value });
  };

  const handleStatusChange = (e) => {
    onFilterChange({ status: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <div className="relative">
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          value={filters.status}
          onChange={handleStatusChange}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <button className="btn-secondary flex items-center space-x-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
        </svg>
        <span>More Filters</span>
      </button>
    </div>
  );
};

export default Filters;

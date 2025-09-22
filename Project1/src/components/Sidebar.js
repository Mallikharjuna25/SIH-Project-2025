import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📋', label: 'Issues', active: false },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '👥', label: 'Citizens', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
    { icon: '📞', label: 'Support', active: false }
  ];

  return (
    <div className="w-64 bg-white shadow-soft border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CC</span>
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-semibold text-gray-900">Civic Connectors</h1>
            <p className="text-xs text-gray-500">Issue Management</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${item.active ? 'active' : ''}`}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm font-medium">JD</span>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

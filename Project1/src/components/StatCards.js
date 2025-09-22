import React from 'react';

const StatCards = ({ issues }) => {
  const totalIssues = issues.length;
  const resolvedIssues = issues.filter(issue => issue.status === 'resolved').length;
  const pendingIssues = issues.filter(issue => issue.status === 'pending').length;
  const inProgressIssues = issues.filter(issue => issue.status === 'in-progress').length;

  const stats = [
    {
      title: 'Total Issues',
      value: totalIssues,
      icon: '📊',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Resolved',
      value: resolvedIssues,
      icon: '✅',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Pending',
      value: pendingIssues,
      icon: '⏳',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      change: '+3%',
      changeType: 'neutral'
    },
    {
      title: 'In Progress',
      value: inProgressIssues,
      icon: '🔄',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '-2%',
      changeType: 'negative'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-xs font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 
                  'text-gray-500'
                }`}>
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;

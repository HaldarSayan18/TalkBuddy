import React, { useState } from 'react';

const AdminPanel = ({ onSwitchToChat }) => {
    const [users] = useState([
        { id: 1, name: 'John', email: 'john@example.com', role: 'user', status: 'online', joinDate: '2024-01-15', messagesCount: 42 },
        { id: 2, name: 'Sarah', email: 'sarah@example.com', role: 'user', status: 'online', joinDate: '2024-01-20', messagesCount: 28 },
        { id: 3, name: 'Mike', email: 'mike@example.com', role: 'user', status: 'away', joinDate: '2024-01-10', messagesCount: 67 },
        { id: 4, name: 'Emma', email: 'emma@example.com', role: 'moderator', status: 'offline', joinDate: '2024-01-05', messagesCount: 153 }
    ]);

    const [reports] = useState([
        { id: 1, reporter: 'Sarah', reported: 'Mike', reason: 'Inappropriate language', timestamp: new Date('2024-01-25T10:30:00') },
        { id: 2, reporter: 'John', reported: 'Unknown User', reason: 'Spam messages', timestamp: new Date('2024-01-24T15:45:00') }
    ]);

    const [activeTab, setActiveTab] = useState('users');

    const handleBanUser = (userName) => {
        alert(`${userName} has been banned (demo)`);
    };

    const handlePromoteUser = (userName) => {
        alert(`${userName} has been promoted to moderator (demo)`);
    };

    const handleResolveReport = (reportId) => {
        alert(`Report #${reportId} has been resolved (demo)`);
    };

    const stats = {
        totalUsers: users.length,
        onlineUsers: users.filter(u => u.status === 'online').length,
        totalMessages: users.reduce((sum, u) => sum + u.messagesCount, 0),
        pendingReports: reports.length
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm px-6 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                    <button
                        onClick={onSwitchToChat}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Back to Chat
                    </button>
                </div>
            </div>

            <div className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                        <p className="text-3xl font-bold text-blue-600">{stats.totalUsers}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Online Now</h3>
                        <p className="text-3xl font-bold text-green-600">{stats.onlineUsers}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Total Messages</h3>
                        <p className="text-3xl font-bold text-purple-600">{stats.totalMessages}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Pending Reports</h3>
                        <p className="text-3xl font-bold text-red-600">{stats.pendingReports}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            <button
                                onClick={() => setActiveTab('users')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'users'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                User Management
                            </button>
                            <button
                                onClick={() => setActiveTab('reports')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reports'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Reports
                            </button>
                        </nav>
                    </div>

                    <div className="p-6">
                        {activeTab === 'users' && (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">User Management</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messages</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {users.map(user => (
                                                <tr key={user.id} className="hover:bg-gray-50">
                                                    <td className="px-4 py-4">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                            <div className="text-sm text-gray-500">{user.email}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                                                user.role === 'moderator' ? 'bg-yellow-100 text-yellow-800' :
                                                                    'bg-gray-100 text-gray-800'
                                                            }`}>
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center">
                                                            <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'online' ? 'bg-green-500' :
                                                                    user.status === 'away' ? 'bg-yellow-500' :
                                                                        'bg-gray-400'
                                                                }`}></div>
                                                            <span className="text-sm text-gray-900">{user.status}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-900">{user.messagesCount}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500">{user.joinDate}</td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex gap-2">
                                                            {user.role === 'user' && (
                                                                <button
                                                                    onClick={() => handlePromoteUser(user.name)}
                                                                    className="text-green-600 hover:text-green-800 text-xs px-2 py-1 hover:bg-green-50 rounded"
                                                                >
                                                                    Promote
                                                                </button>
                                                            )}
                                                            <button
                                                                onClick={() => handleBanUser(user.name)}
                                                                className="text-red-600 hover:text-red-800 text-xs px-2 py-1 hover:bg-red-50 rounded"
                                                            >
                                                                Ban
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reports' && (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">User Reports</h2>
                                <div className="space-y-4">
                                    {reports.map(report => (
                                        <div key={report.id} className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        Report against {report.reported}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Reported by: {report.reporter}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        Reason: {report.reason}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-2">
                                                        {report.timestamp.toLocaleString()}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleResolveReport(report.id)}
                                                        className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                                                    >
                                                        Resolve
                                                    </button>
                                                    <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors">
                                                        Take Action
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
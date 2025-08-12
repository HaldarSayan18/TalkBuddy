import React from 'react';

const UserList = ({ users, currentUser, onKickUser, isAdmin }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Online Users ({users.length})</h3>
            <div className="space-y-2">
                {users.map(user => (
                    <div key={user.name} className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
                        <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                                }`}></div>
                            <span className="text-sm font-medium">{user.name}</span>
                            {user.role === 'admin' && (
                                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded">
                                    Admin
                                </span>
                            )}
                            {user.name === currentUser && (
                                <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">
                                    You
                                </span>
                            )}
                        </div>
                        {isAdmin && user.name !== currentUser && (
                            <button
                                onClick={() => onKickUser(user.name)}
                                className="text-red-500 hover:text-red-700 text-xs px-2 py-1 hover:bg-red-50 rounded"
                            >
                                Kick
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
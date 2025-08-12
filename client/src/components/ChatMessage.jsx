import React from 'react';

const ChatMessage = ({ message, currentUser, onDelete, isAdmin }) => {
    const isOwnMessage = message.user === currentUser;

    return (
        <div className={`flex mb-4 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isOwnMessage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}>
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold">
                        {message.user}
                        {message.role === 'admin' && (
                            <span className="ml-1 px-1 py-0.5 bg-red-500 text-white text-xs rounded">
                                Admin
                            </span>
                        )}
                    </span>
                    {(isAdmin || isOwnMessage) && (
                        <button
                            onClick={() => onDelete(message.id)}
                            className="text-xs opacity-60 hover:opacity-100 ml-2"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                </span>
            </div>
        </div>
    );
};

export default ChatMessage;
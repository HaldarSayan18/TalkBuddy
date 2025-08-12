import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatPage';
import UserList from './UserList';
import { Hash, Users } from 'lucide-react';

const ChatRoom = ({ currentUser, users, messages, onSendMessage, onDeleteMessage }) => {
    const [showUserList, setShowUserList] = useState(true);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    };

    return (
        <div className="flex h-full bg-gray-100">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Hash className="w-5 h-5 text-gray-500" />
                            <h2 className="text-xl font-semibold text-gray-900">General Chat</h2>
                        </div>
                        <button
                            onClick={() => setShowUserList(!showUserList)}
                            className="md:hidden bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
                        >
                            <Users className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Welcome to the main chat room</p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto">
                    <div className="py-4">
                        {messages.map((message) => {
                            const user = getUserById(message.userId);
                            return (
                                <ChatMessage
                                    key={message.id}
                                    message={message}
                                    user={user}
                                    isOwn={message.userId === currentUser?.id}
                                    onDelete={currentUser?.role === 'admin' ? onDeleteMessage : null}
                                />
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Message Input */}
                <ChatInput onSendMessage={onSendMessage} currentUser={currentUser} />
            </div>

            {/* User Sidebar */}
            {showUserList && (
                <div className="w-80 border-l border-gray-200 p-4 bg-gray-50 hidden md:block">
                    <UserList users={users} />
                </div>
            )}
        </div>
    );
};

export default ChatRoom;
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import UserList from './UserList';
import logo from '../assets/logo.png'

const ChatPage = ({ currentUser, isAdmin, onSwitchToAdmin }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: 'Admin',
            role: 'admin',
            text: 'Welcome to the chat room!',
            timestamp: new Date()
        },
        {
            id: 2,
            user: 'John',
            role: 'user',
            text: 'Hello everyone!',
            timestamp: new Date()
        }
    ]);

    const [users] = useState([
        { name: 'Admin', role: 'admin', status: 'online' },
        { name: 'John', role: 'user', status: 'online' },
        { name: 'Sarah', role: 'user', status: 'online' },
        { name: 'Mike', role: 'user', status: 'away' }
    ]);

    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const message = {
                id: Date.now(),
                user: currentUser,
                role: isAdmin ? 'admin' : 'user',
                text: newMessage,
                timestamp: new Date()
            };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    const handleDeleteMessage = (messageId) => {
        setMessages(messages.filter(msg => msg.id !== messageId));
    };

    const handleKickUser = (userName) => {
        alert(`${userName} has been kicked from the chat (demo)`);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    {/* <div className='flex justify-center items-center'> */}
                    <img src={logo} alt='logo' height="50px" width="80px" />
                    {/* <h1 className="text-xl font-semibold text-gray-800">Chat Room</h1> */}
                    {/* </div> */}
                    <div className="flex gap-2">
                        {isAdmin && (
                            <button
                                onClick={onSwitchToAdmin}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Admin Panel
                            </button>
                        )}
                        <span className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">
                            {currentUser} {isAdmin && '(Admin)'}
                        </span>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6">
                    {messages.map(message => (
                        <ChatMessage
                            key={message.id}
                            message={message}
                            currentUser={currentUser}
                            onDelete={handleDeleteMessage}
                            isAdmin={isAdmin}
                        />
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="bg-white border-t p-4">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-white border-l p-4">
                <UserList
                    users={users}
                    currentUser={currentUser}
                    onKickUser={handleKickUser}
                    isAdmin={isAdmin}
                />
            </div>
        </div>
    );
};

export default ChatPage;
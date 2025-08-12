import React, { useState } from 'react';
import ChatPage from './components/ChatPage';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState('chat');
  const [currentUser] = useState('Admin'); // In a real app, this would come from authentication
  const [isAdmin] = useState(true); // In a real app, this would be determined by user role

  const switchToAdmin = () => {
    setCurrentView('admin');
  };

  const switchToChat = () => {
    setCurrentView('chat');
  };

  return (
    <div className="App">
      {currentView === 'chat' ? (
        <ChatPage
          currentUser={currentUser}
          isAdmin={isAdmin}
          onSwitchToAdmin={switchToAdmin}
        />
      ) : (
        <AdminPanel
          onSwitchToChat={switchToChat}
        />
      )}
    </div>
  );
}

export default App;
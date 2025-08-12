export const mockUsers = [
    {
        id: '1',
        name: 'John Admin',
        email: 'admin@example.com',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'admin',
        status: 'online',
        joinedAt: '2024-01-15',
        lastActive: new Date()
    },
    {
        id: '2',
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'user',
        status: 'online',
        joinedAt: '2024-02-10',
        lastActive: new Date(Date.now() - 120000)
    },
    {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'moderator',
        status: 'away',
        joinedAt: '2024-01-20',
        lastActive: new Date(Date.now() - 300000)
    },
    {
        id: '4',
        name: 'Emma Davis',
        email: 'emma@example.com',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'user',
        status: 'offline',
        joinedAt: '2024-02-05',
        lastActive: new Date(Date.now() - 3600000)
    },
    {
        id: '5',
        name: 'Alex Chen',
        email: 'alex@example.com',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'user',
        status: 'online',
        joinedAt: '2024-02-12',
        lastActive: new Date()
    }
];

export const initialMessages = [
    {
        id: '1',
        userId: '2',
        content: 'Hey everyone! How\'s everyone doing today?',
        timestamp: new Date(Date.now() - 1800000),
        type: 'text'
    },
    {
        id: '2',
        userId: '3',
        content: 'Pretty good! Just working on some new features.',
        timestamp: new Date(Date.now() - 1500000),
        type: 'text'
    },
    {
        id: '3',
        userId: '1',
        content: 'Great to see everyone active! Remember our team meeting at 3 PM.',
        timestamp: new Date(Date.now() - 1200000),
        type: 'text'
    },
    {
        id: '4',
        userId: '4',
        content: 'Thanks for the reminder! I\'ll be there.',
        timestamp: new Date(Date.now() - 900000),
        type: 'text'
    },
    {
        id: '5',
        userId: '2',
        content: 'Looking forward to it! 🚀',
        timestamp: new Date(Date.now() - 600000),
        type: 'text'
    }
];
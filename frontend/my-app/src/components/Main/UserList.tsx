import React, { useEffect, useState } from 'react';
import { UserCard } from './UserCard';

interface ApiUser {
    id: number;
    name: string;
    email: string;
}

interface User {
    id: number;
    username: string;
    age: number;
    role: 'ADMIN' | 'USER';
    isActive: boolean;
}

export const UserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await fetch('http://localhost:8000/users');
                const data: ApiUser[] = await response.json();

                const adaptedUsers: User[] = data.map(apiUser => ({
                    id: apiUser.id,
                    username: apiUser.name, // Мапим name -> username
                    age: 20 + apiUser.id,   // Генерим фейковый возраст
                    role: apiUser.id % 2 === 0 ? 'ADMIN' : 'USER', // Генерим роль
                    isActive: true
                }));
                setUsers(adaptedUsers);
            }
            catch (error) {
                console.error('Error fetching users:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])

    if (loading) {
        return <p>Loading users...</p>;
    }

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {users.map((user) => (
                <UserCard
                    key={user.id}          
                    username={user.username}
                    age={user.age}
                    role={user.role}
                    isActive={user.isActive}
                />
            ))}
        </div>
    );
}
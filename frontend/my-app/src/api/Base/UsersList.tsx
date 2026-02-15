
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

export const UserList = async () => {
    const response = await fetch('http://localhost:8000/users');
    const data: ApiUser[] = await response.json();

    const adaptedUsers: User[] = data.map(apiUser => ({
        id: apiUser.id,
        username: apiUser.name, // Мапим name -> username
        age: 20 + apiUser.id,   // Генерим фейковый возраст
        role: apiUser.id % 2 === 0 ? 'ADMIN' : 'USER', // Генерим роль
        isActive: true
    }));
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return adaptedUsers;
}
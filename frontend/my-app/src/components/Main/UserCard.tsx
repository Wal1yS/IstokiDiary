// 1. Мы определяем интерфейс. Это твой контракт.
// По сути, это зеркало твоего Java UserDTO.
interface UserCardProps {
    username: string;
    age: number;
    role: 'ADMIN' | 'USER'; // Enum "на минималках" прямо в типе!
    isActive?: boolean;     // Знак ? означает, что поле необязательное
}

// 2. Объявляем компонент.
// React.FC означает "Functional Component".
// <UserCardProps> говорит TS, какие аргументы ожидать.
export const UserCard: React.FC<UserCardProps> = ({ username, age, role, isActive = false }) => {
    
    // Внутри можно писать любую логику JS перед return
    const statusColor = isActive ? 'green' : 'red';

    // Возвращаем разметку (JSX)
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            {/* Фигурные скобки {} позволяют вставить JS-переменную в HTML */}
            <h3>User: {username}</h3> 
            <p>Age: {age}</p>
            <p>Role: <strong>{role}</strong></p>
            
            {/* Условный рендеринг: Если isActive true, покажем текст */}
            <p style={{ color: statusColor }}>
                Status: {isActive ? 'Active' : 'Banned'}
            </p>
        </div>
    );
};
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Типы
type Role = 'CURATOR' | 'USER' | 'GUEST';

interface AuthContextType {
    role: Role;
    isAuthenticated: boolean;
    login: (role: Role) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // По умолчанию роль GUEST (гость)
    const [role, setRole] = useState<Role>('GUEST');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // 1. При загрузке страницы (F5) проверяем LocalStorage
    useEffect(() => {
        const savedRole = localStorage.getItem('user_role') as Role;
        if (savedRole) {
            setRole(savedRole);
            setIsAuthenticated(true);
        }
    }, []);

    // 2. Функция входа
    const login = (newRole: Role) => {
        localStorage.setItem('user_role', newRole); // Сохраняем "навечно"
        setRole(newRole);
        setIsAuthenticated(true);
    };

    // 3. Функция выхода
    const logout = () => {
        localStorage.removeItem('user_role'); // Чистим
        setRole('GUEST');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ role, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
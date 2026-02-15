export interface LoginRequestDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    status: string;
    name: string;
    surname: string;
    patronymic: string;
    role: string;
    email: string;
    number: string;
}

export const loginUser = async (user: LoginRequestDTO): Promise<LoginResponseDTO> => {
    const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    return await response.json();
}
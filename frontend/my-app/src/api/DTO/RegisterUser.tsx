export interface RegisterRequestDTO {
    name: string;
    surname: string;
    patronymic: string;
    password: string;
    email: string;
    number: string;
}

export interface RegisterResponseDTO {
    status: string;
    name: string;
    surname: string;
    patronymic: string;
    role: string;
    email: string;
    number: string;
}

export const registerUser = async (user: RegisterRequestDTO) => {
    const response = await fetch('http://localhost:8000/reg', {
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
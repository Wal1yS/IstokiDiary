import React, { use, useEffect, useState } from 'react';

export interface LoginUserDTO {
    name: string;
    password: string;
}

export const loginUser = async (user: LoginUserDTO) => {
    const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
}
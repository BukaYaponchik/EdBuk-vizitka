const API_BASE = 'http://147.45.103.3:1880';

export const api = {
    sendRequest: async (data: any) => {
        const response = await fetch(`${API_BASE}${ENDPOINTS.ZAYVKA}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке заявки');
        }

        return response.json();
    }
};

export const ENDPOINTS = {
    ZAYVKA: '/zayvka', // Изменил endpoint на более подходящий
};
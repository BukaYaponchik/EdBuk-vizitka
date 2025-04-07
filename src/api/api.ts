export const api = {
    sendRequest: async (data: any) => {
        const response = await fetch(`/api/zayvka`, {
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
    },

    // Добавляем функции для работы с заявками из админ-панели
    getRequests: async () => {
        const response = await fetch('/api/requests');

        if (!response.ok) {
            throw new Error('Ошибка при получении заявок');
        }

        return response.json();
    },

    getRequestById: async (id: string) => {
        const response = await fetch(`/api/requests/${id}`);

        if (!response.ok) {
            throw new Error('Ошибка при получении заявки');
        }

        return response.json();
    },

    deleteRequest: async (id: string) => {
        const response = await fetch(`/api/requests/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении заявки');
        }

        return response.json();
    }
};

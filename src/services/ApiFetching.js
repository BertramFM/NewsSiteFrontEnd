const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllArticles = async () => {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    return response.json();
};
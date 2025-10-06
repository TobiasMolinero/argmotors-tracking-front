export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    console.log(import.meta.env.API_URL);
    const API_URL = import.meta.env.API_URL || 'http://localhost:3000/';

    const res = await fetch(`${API_URL.replace(/\/$/, '')}${endpoint.replace(/\/$/, '')}`, options);
    const data = await res.json();
    console.log(data);
    
    if(data.error === "NO_ACC_TKN") {
        alert('No tienes permiso para realizar esta acción. Por favor, inicia sesión.');
        window.location.replace('/login');
        return;
    }

    return data;
}
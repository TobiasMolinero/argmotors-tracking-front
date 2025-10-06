// @ts-nocheck
export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    // const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/';
    const res = await fetch(`https://argmotors-tracking-back.vercel.app${endpoint}`, options);
    const data = await res.json();
    
    if(data.error === "NO_ACC_TKN") {
        alert('No tienes permiso para realizar esta acción. Por favor, inicia sesión.');
        window.location.replace('/login');
        return;
    } 

    return data;
}
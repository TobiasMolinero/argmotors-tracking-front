import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = (context, next) => {
    const { request, cookies, redirect } = context;
    const url = new URL(request.url);
  
  // Rutas que necesitan autenticación
  if (url.pathname.startsWith('/admin')) {
    const token = cookies.get('auth-token');
    
    if (!token) {
      debugger
      console.log('No esta autorizado')
      return redirect('/login');
    }
  }
  
  return next();
}
import { NextResponse, type NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export async function middleware(request: NextRequest) {
  const tokenCookie = await request.cookies.get('sb-access-token') // Ajusta esto según tu método de autenticación
  const token = tokenCookie?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }
    jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    console.error('Token verification failed:', error)
    // Si el token no es válido o ha expirado, redirige al usuario a la página de inicio de sesión
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/protected-route/:path*'],
}
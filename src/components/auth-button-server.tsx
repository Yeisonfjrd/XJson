import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButton } from './auth-button-client'

export async function AuthButtonServer() {
  // Obtener las cookies del contexto
  const cookieStore = cookies()

  // Pasar cookies como una función que retorna una promesa
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })

  const { data: { session } } = await supabase.auth.getSession()

  // Retornar el botón con la sesión
  return <AuthButton session={session} />
}
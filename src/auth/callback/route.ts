import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    // Pass a function that returns the cookies promise
    const supabase = createRouteHandlerClient({
      cookies: async () => await cookies() // Ensure cookies is a function returning a promise
    })
    
    // Exchange code for session
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}

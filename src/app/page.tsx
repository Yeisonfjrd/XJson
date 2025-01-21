import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '../components/auth-button-server'
import { PostLists } from '../components/post-list'
import { type Database } from '../types/database'
import { ComposePost } from '../components/compose-post'
import { Post } from '../types/posts'

export default async function Home () {
  // Pass the cookies function itself (not the result)
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const { data, error } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })

  const posts = error ? null : data as unknown as Post[] | null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        {session && <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />}
        <PostLists posts={posts} />
      </section>
      <AuthButtonServer />
    </main>
  )
}
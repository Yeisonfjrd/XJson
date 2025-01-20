'use client'

import React from 'react';
import { useState, useEffect } from 'react'

export function ComposePostButton () {
  const [pending, setPending] = useState(false)

  useEffect(() => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 2000);
  }, [])

  return (
    <button
      disabled={pending}
      type='submit'
      className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'
    >
      {pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}
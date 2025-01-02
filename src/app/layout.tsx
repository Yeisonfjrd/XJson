import React from 'react'
import './globals.css'
import {Providers} from "./providers";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Un clon de Twitter renombrado como XJson',
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}

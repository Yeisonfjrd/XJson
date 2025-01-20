'use client'

import React from 'react';
import { Card, CardHeader, CardBody, Avatar, CardFooter } from '@nextui-org/react'
import Link from 'next/link'
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
  return (
    <Card className="bg-transparent border-l border-r border-b border-w border-white/20 border-white/20 rounded-none">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent"> 
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
        <IconMessageCircle className="w-4 h-4" /> as JSX.Element
        </button>
        <button>
          <IconHeart className='w-4 h-4' /> as JSX.Element
        </button>
        <button>
          <IconRepeat className='w-4 h-4' /> as JSX.Element
        </button>
      </CardFooter>
    </Card>
  )
}
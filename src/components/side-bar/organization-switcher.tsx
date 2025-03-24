'use client'

import { IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock data - replace with your actual data
const organizations = [
  {
    id: 1,
    name: 'Void',
    slug: 'void',
    logo: '/logo.png',
  },
  {
    id: 2,
    name: 'Prodigy Roleplay',
    slug: 'prodigy-roleplay',
    logo: '/logo.png',
  },
]

export function OrganizationSwitcher() {
  const [selectedOrg, setSelectedOrg] = React.useState(organizations[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between gap-2 px-4 py-2 hover:bg-accent"
        >
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <Image
                src={selectedOrg.logo}
                alt={selectedOrg.name}
                width={20}
                height={20}
                className="rounded-sm object-contain"
              />
            </div>
            <span className="text-sm font-medium">{selectedOrg.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2">
        <div className="mb-2 px-2 text-xs font-medium">Organizations</div>
        {organizations.map((org) => (
          <DropdownMenuItem
            key={org.id}
            onClick={() => setSelectedOrg(org)}
            className="flex items-center gap-2 px-2 py-1.5"
          >
            <div className="flex-shrink-0">
              <Image
                src={org.logo}
                alt={org.name}
                width={20}
                height={20}
                className="rounded-sm object-contain"
              />
            </div>
            <span className="text-sm">{org.name}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/organizations/new"
            className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
          >
            <IconPlus size={16} />
            <span className="text-sm">Create new</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

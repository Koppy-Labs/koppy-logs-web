'use client'

import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconListDetails,
  IconMenu2,
  IconReport,
  IconSearch,
  IconDownload, 
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/utils/cn'

import { Button } from '../ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar'
import { NavDocuments } from './nav-documents'
import { NavMain } from './nav-main'
import { NavSecondary } from './nav-secoundary'
import { NavUser } from './nav-user'
import { DownloadCloudIcon } from 'lucide-react'

const sidebarData = {
  user: {
    name: 'Vicente Sanchez',
    email: 'vikom.sanchez@gmail.com',
    avatar: '/vicente-san.png',
  },

  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Logs',
      url: '/logs',
      icon: IconListDetails,
    },
    {
      title: 'Analytics',
      url: '/analytics',
      icon: IconChartBar,
    },
  ],

  navSecondary: [
    {
      title: 'Get Help',
      url: '/help',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '/search',
      icon: IconSearch,
    },
  ],

  documents: [
    {
      name: 'Documentation',
      url: '/docs',
      icon: IconDatabase,
    },
    {
      name: 'Resource',
      url: '/',
      icon: IconDownload,
    },
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  const { toggleSidebar, state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        'border-r border-stone-200 dark:border-stone-800',
        className,
      )}
      {...props}
    >
      <SidebarHeader className="border-b border-stone-200 dark:border-stone-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              href="/dashboard"
              className={cn(
                'flex items-center justify-center gap-3 px-3 py-2 transition-colors hover:text-primary',
                {
                  'flex items-center justify-start': !isCollapsed,
                },
              )}
              title="Go to Dashboard"
            >
              <div className="flex-shrink-0 items-start justify-start">
                <Image
                  src="/logo.png"
                  alt="Koppy Logs"
                  width={156}
                  height={143}
                  className={cn('size-6 object-contain dark:invert')}
                  priority
                />
              </div>

              <span
                className={cn(
                  'text-xl font-semibold shrink-0 tracking-tight transition-all duration-300',
                  {
                    'opacity-0 translate-x-2': isCollapsed,
                    hidden: isCollapsed,
                  },
                )}
              >
                Koppy Logs
              </span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              onClick={toggleSidebar}
              variant="ghost"
              size="icon"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <IconMenu2 />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={sidebarData.navMain} />

        <div className="my-4 border-t border-stone-200 dark:border-stone-800"></div>

        <NavDocuments items={sidebarData.documents} />

        <div className="mt-auto pt-4">
          <NavSecondary items={sidebarData.navSecondary} />
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-stone-200 dark:border-stone-800 py-2">
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

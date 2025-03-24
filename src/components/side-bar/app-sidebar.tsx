'use client'

import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconDownload,
  IconHelp,
  IconListDetails,
  IconMenu2,
  IconSearch,
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
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
import { OrganizationSwitcher } from './organization-switcher'

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
              <motion.div
                className="flex-shrink-0 items-start justify-start"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Koppy Logs"
                  width={156}
                  height={143}
                  className={cn('size-6 object-contain dark:invert')}
                  priority
                />
              </motion.div>

              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    className="text-xl font-semibold shrink-0 tracking-tight"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Koppy Logs
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarMenuItem>
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                onClick={toggleSidebar}
                variant="ghost"
                size="icon"
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <motion.div
                  animate={{ rotate: isCollapsed ? 90 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <IconMenu2 />
                </motion.div>
              </Button>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <motion.div
        className="px-2 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <OrganizationSwitcher />
      </motion.div>

      <SidebarContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <NavMain items={sidebarData.navMain} />
        </motion.div>

        <motion.div
          className="my-4 border-t border-stone-200 dark:border-stone-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <NavDocuments items={sidebarData.documents} />
        </motion.div>

        <motion.div
          className="mt-auto pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <NavSecondary items={sidebarData.navSecondary} />
        </motion.div>
      </SidebarContent>

      <SidebarFooter className="border-t border-stone-200 dark:border-stone-800 py-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <NavUser user={sidebarData.user} />
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  )
}

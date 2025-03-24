'use client'

import { type Icon, IconBrightness } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar'
import { Skeleton } from '../ui/skeleton'
import { Switch } from '../ui/switch'

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SidebarMenuItem>
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </motion.div>
              </SidebarMenuItem>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: items.length * 0.1 }}
            className="group-data-[collapsible=icon]:hidden"
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <label>
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconBrightness />
                  </motion.div>
                  <span>Dark Mode</span>
                  {mounted ? (
                    <Switch
                      className="ml-auto"
                      checked={resolvedTheme !== 'light'}
                      onCheckedChange={() =>
                        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                      }
                    />
                  ) : (
                    <Skeleton className="ml-auto h-4 w-8 rounded-full" />
                  )}
                </label>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </motion.div>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

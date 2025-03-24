'use client'

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconSettings,
  IconUserCircle,
} from '@tabler/icons-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { UserSettingsModal } from '@/components/settings/user-settings-modal'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar'

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settingsTabToBeOpen, setSettingsTabToBeOpen] = useState<
    'account' | 'billing' | 'notifications' | 'settings'
  >('account')

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar className="h-8 w-8 rounded-lg grayscale">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user.email}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconDotsVertical className="ml-auto size-4" />
                  </motion.div>
                </SidebarMenuButton>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? 'bottom' : 'right'}
              align="end"
              sideOffset={4}
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user.name}</span>
                      <span className="text-muted-foreground truncate text-xs">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenuItem
                      onClick={() => {
                        setSettingsTabToBeOpen('account')
                        setSettingsOpen(true)
                      }}
                    >
                      <IconUserCircle />
                      Account
                    </DropdownMenuItem>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenuItem
                      onClick={() => {
                        setSettingsTabToBeOpen('billing')
                        setSettingsOpen(true)
                      }}
                    >
                      <IconCreditCard />
                      Billing
                    </DropdownMenuItem>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenuItem
                      onClick={() => {
                        setSettingsTabToBeOpen('notifications')
                        setSettingsOpen(true)
                      }}
                    >
                      <IconNotification />
                      Notifications
                    </DropdownMenuItem>
                  </motion.div>
                </DropdownMenuGroup>
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuItem
                    onClick={() => {
                      setSettingsTabToBeOpen('settings')
                      setSettingsOpen(true)
                    }}
                  >
                    <IconSettings />
                    Settings
                  </DropdownMenuItem>
                </motion.div>
                <DropdownMenuSeparator />
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuItem>
                    <IconLogout />
                    Log out
                  </DropdownMenuItem>
                </motion.div>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <UserSettingsModal
        open={settingsOpen}
        setTabToBeOpen={(value) => {
          setSettingsTabToBeOpen(
            value as 'account' | 'billing' | 'notifications',
          )
        }}
        tabToBeOpen={settingsTabToBeOpen}
        onOpenChange={setSettingsOpen}
        user={user}
      />
    </>
  )
}

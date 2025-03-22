'use client'

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconSettings,
  IconUserCircle,
} from '@tabler/icons-react'
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
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
                <IconDotsVertical className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? 'bottom' : 'right'}
              align="end"
              sideOffset={4}
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
                <DropdownMenuItem
                  onClick={() => {
                    setSettingsTabToBeOpen('account')
                    setSettingsOpen(true)
                  }}
                >
                  <IconUserCircle />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSettingsTabToBeOpen('billing')
                    setSettingsOpen(true)
                  }}
                >
                  <IconCreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSettingsTabToBeOpen('notifications')
                    setSettingsOpen(true)
                  }}
                >
                  <IconNotification />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => {
                  setSettingsTabToBeOpen('settings')
                  setSettingsOpen(true)
                }}
              >
                <IconSettings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <IconLogout />
                Log out
              </DropdownMenuItem>
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

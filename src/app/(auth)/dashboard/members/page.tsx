'use client'

import { MoreHorizontal, Pencil, Plus, Trash2, UserPlus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Mock data - replace with your actual data fetching logic
const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/01.png',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/avatars/02.png',
    role: 'Member',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert@example.com',
    avatar: '/avatars/03.png',
    role: 'Member',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: '/avatars/04.png',
    role: 'Member',
  },
]

export default function MembersPage() {
  const [users, setUsers] = useState(members)
  const tableRef = useRef(null)

  const handleEditRole = (userId: number) => {
    // Implement edit role logic
    console.log('Edit role for user:', userId)
  }

  const handleRemoveUser = (userId: number) => {
    // Remove user from state
    setUsers(users.filter((user) => user.id !== userId))
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-10 max-w-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <motion.h1
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Members
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Manage your organization members and their roles.
          </motion.p>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button size="default" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Member
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="rounded-md border overflow-hidden bg-card"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        ref={tableRef}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence initial={false} mode="popLayout">
              {users.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    exit: { duration: 0.15 },
                  }}
                  className="group"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-xs text-muted-foreground hidden sm:inline-block">
                          Joined {new Date().toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.email}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === 'Admin' ? 'default' : 'secondary'}
                      className="font-medium"
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-70 hover:opacity-100 transition-opacity"
                        >
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <DropdownMenuItem
                            onClick={() => handleEditRole(user.id)}
                            className="cursor-pointer gap-2"
                          >
                            <Pencil className="h-4 w-4" />
                            Edit Role
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRemoveUser(user.id)}
                            className="text-destructive focus:text-destructive cursor-pointer gap-2"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </DropdownMenuItem>
                        </motion.div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </motion.div>

      {/* Empty state */}
      <AnimatePresence>
        {users.length === 0 && (
          <motion.div
            className="flex flex-col items-center justify-center p-12 text-center rounded-md border bg-card mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <UserPlus className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No members found</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Add members to your organization to collaborate and manage
              permissions.
            </p>
            <div className="mt-6">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add First Member
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

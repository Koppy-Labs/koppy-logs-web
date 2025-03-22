'use client'

import {
  IconActivity,
  IconAlertCircle,
  IconClock,
  IconDownload,
  IconFilter,
  IconRefresh,
  IconSearch,
  IconServer,
  IconSettings,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'

import { LogsSettingsModal } from '@/components/settings/settings-modal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Log {
  id: number
  type: string
  message: string
  severity: 'Info' | 'Warning' | 'Error'
  timestamp: string
  server: string
}

const logs: Log[] = [
  {
    id: 1,
    type: 'Server Connection',
    message: 'Player connected to server #1',
    severity: 'Info',
    timestamp: '2m ago',
    server: 'Server 1',
  },
  {
    id: 2,
    type: 'Resource Error',
    message: 'Failed to load resource: inventory',
    severity: 'Error',
    timestamp: '5m ago',
    server: 'Server 2',
  },
  {
    id: 3,
    type: 'Player Action',
    message: 'Player purchased item: weapon_pistol',
    severity: 'Info',
    timestamp: '8m ago',
    server: 'Server 1',
  },
  {
    id: 4,
    type: 'Server Warning',
    message: 'High CPU usage detected',
    severity: 'Warning',
    timestamp: '12m ago',
    server: 'Server 3',
  },
  {
    id: 5,
    type: 'Database Error',
    message: 'Connection timeout to database',
    severity: 'Error',
    timestamp: '15m ago',
    server: 'Server 2',
  },
]

// Client-side only component for sortable table
function SortableTable({ logs }: { logs: Log[] }) {
  return (
    <div className="relative w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Server</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="font-medium">{log.type}</TableCell>
              <TableCell>{log.message}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    log.severity === 'Error'
                      ? 'destructive'
                      : log.severity === 'Warning'
                        ? 'secondary'
                        : 'outline'
                  }
                >
                  {log.severity}
                </Badge>
              </TableCell>
              <TableCell>{log.server}</TableCell>
              <TableCell className="text-right">{log.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function Page() {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setSettingsOpen(true)}>
              <IconSettings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Link href="/logs">
              <Button variant="outline">
                <IconSearch className="mr-2 h-4 w-4" />
                View All Logs
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
              <IconActivity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +12% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Servers
              </CardTitle>
              <IconServer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                All servers operational
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
              <IconAlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.8%</div>
              <p className="text-xs text-muted-foreground">
                -2% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Response Time
              </CardTitle>
              <IconClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45ms</div>
              <p className="text-xs text-muted-foreground">
                -5ms from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Logs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Logs</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search logs..."
                    className="w-[200px] pl-9"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Logs</SelectItem>
                    <SelectItem value="error">Errors</SelectItem>
                    <SelectItem value="warning">Warnings</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <SortableTable logs={logs} />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <IconDownload className="h-4 w-4" />
                <span>Export Logs</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <IconFilter className="h-4 w-4" />
                <span>Create Filter</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <IconRefresh className="h-4 w-4" />
                <span>Refresh Data</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
                onClick={() => setSettingsOpen(true)}
              >
                <IconSettings className="h-4 w-4" />
                <span>Log Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <LogsSettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}

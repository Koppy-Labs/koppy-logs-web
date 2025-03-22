'use client'

import { IconDownload, IconRefresh, IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

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

// Initial sample logs
const initialLogs: Log[] = [
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

export default function Page() {
  const [logs, setLogs] = useState<Log[]>(initialLogs)
  const [filteredLogs, setFilteredLogs] = useState<Log[]>(initialLogs)
  const [searchQuery, setSearchQuery] = useState('')
  const [severityFilter, setSeverityFilter] = useState('all')
  const [serverFilter, setServerFilter] = useState('all')
  const [timeFilter, setTimeFilter] = useState('all')
  const [isConnected, setIsConnected] = useState(false)

  // WebSocket connection setup
  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('ws://your-websocket-server-url/logs')

    // Connection opened
    socket.addEventListener('open', () => {
      console.log('Connected to logs WebSocket server')
      setIsConnected(true)
    })

    // Listen for messages
    socket.addEventListener('message', (event) => {
      try {
        const newLog = JSON.parse(event.data) as Log
        setLogs((prevLogs) => [newLog, ...prevLogs])
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    })

    // Connection closed
    socket.addEventListener('close', () => {
      console.log('Disconnected from logs WebSocket server')
      setIsConnected(false)
    })

    // Connection error
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error)
      setIsConnected(false)
    })

    // Cleanup on unmount
    return () => {
      socket.close()
    }
  }, [])

  // Apply filters whenever filter values change
  useEffect(() => {
    let result = logs

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (log) =>
          log.message.toLowerCase().includes(query) ||
          log.type.toLowerCase().includes(query) ||
          log.server.toLowerCase().includes(query),
      )
    }

    // Apply severity filter
    if (severityFilter !== 'all') {
      result = result.filter(
        (log) => log.severity.toLowerCase() === severityFilter.toLowerCase(),
      )
    }

    // Apply server filter
    if (serverFilter !== 'all') {
      const serverNumber = serverFilter.replace('server', '')
      result = result.filter((log) => log.server === `Server ${serverNumber}`)
    }

    // Apply time filter (simplified implementation)
    if (timeFilter !== 'all') {
      // This is a simplified version - in a real app, you'd use actual timestamps
      // and filter based on Date objects
      const timeFilterMap = {
        today: ['2m ago', '5m ago', '8m ago'],
        week: ['2m ago', '5m ago', '8m ago', '12m ago'],
        month: ['2m ago', '5m ago', '8m ago', '12m ago', '15m ago'],
      }

      if (timeFilterMap[timeFilter as keyof typeof timeFilterMap]) {
        result = result.filter((log) =>
          timeFilterMap[timeFilter as keyof typeof timeFilterMap].includes(
            log.timestamp,
          ),
        )
      }
    }

    setFilteredLogs(result)
  }, [logs, searchQuery, severityFilter, serverFilter, timeFilter])

  // Refresh logs function
  const handleRefresh = () => {
    // In a real app, you might want to reconnect the WebSocket or fetch latest logs
    console.log('Refreshing logs...')
  }

  // Export logs function
  const handleExport = () => {
    // Create a CSV string from the filtered logs
    const headers = ['Type', 'Message', 'Severity', 'Server', 'Time']
    const csvContent = [
      headers.join(','),
      ...filteredLogs.map((log) =>
        [
          `"${log.type}"`,
          `"${log.message}"`,
          `"${log.severity}"`,
          `"${log.server}"`,
          `"${log.timestamp}"`,
        ].join(','),
      ),
    ].join('\n')

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `logs_export_${new Date().toISOString()}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Logs</h1>
            <Badge variant={isConnected ? 'outline' : 'destructive'}>
              {isConnected ? 'Live' : 'Disconnected'}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleExport}>
              <IconDownload className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button onClick={handleRefresh}>
              <IconRefresh className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search logs..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select
                defaultValue="all"
                value={severityFilter}
                onValueChange={setSeverityFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="error">Errors</SelectItem>
                  <SelectItem value="warning">Warnings</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                </SelectContent>
              </Select>
              <Select
                defaultValue="all"
                value={serverFilter}
                onValueChange={setServerFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Server" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Servers</SelectItem>
                  <SelectItem value="server1">Server 1</SelectItem>
                  <SelectItem value="server2">Server 2</SelectItem>
                  <SelectItem value="server3">Server 3</SelectItem>
                </SelectContent>
              </Select>
              <Select
                defaultValue="all"
                value={timeFilter}
                onValueChange={setTimeFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Logs Table */}
        <Card>
          <CardContent className="p-0">
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
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
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
                      <TableCell className="text-right">
                        {log.timestamp}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No logs found matching your filters
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

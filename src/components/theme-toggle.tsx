'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsChanging(true)
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setTimeout(() => {
        setIsChanging(false)
      }, 300)
    }, 150)
  }

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        'ml-2 relative overflow-hidden',
        isChanging && 'animate-pulse',
      )}
      disabled={isChanging}
    >
      <Sun
        className={cn(
          'size-4 transition-all duration-300',
          theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100',
          isChanging && 'animate-spin',
        )}
      />
      <Moon
        className={cn(
          'absolute size-4 transition-all duration-300',
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0',
          isChanging && 'animate-spin',
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

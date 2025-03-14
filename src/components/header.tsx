import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border/40 px-6 py-3">
      <Link href="/" className="font-semibold">
        Koppy Logs
      </Link>

      <nav className="flex items-center gap-4">
        <Link
          href="/docs"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Docs
        </Link>
        <Link
          href="/pricing"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Pricing
        </Link>
      </nav>

      <div>
        <Button size="sm" variant="outline">
          <LogIn className="size-4" />
          Log in
        </Button>

        <ThemeToggle />
      </div>
    </header>
  )
}

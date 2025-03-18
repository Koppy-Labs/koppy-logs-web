import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto max-w-screen-xl px-6 py-3">
      <Link href="/" className="font-bold font-inter">
        koppy logs
      </Link>

      <nav className="flex items-center gap-4 font-neue">
        <Link
          href="/docs"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Pricing
        </Link>

        <Link
          href="/pricing"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Features
        </Link>

        <Link
          href="/pricing"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Docs
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button size="sm" variant="ghost" className="rounded-full">
            Log in
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button size="sm" className="rounded-full">
            Get started
          </Button>
        </Link>
      </div>
    </header>
  )
}

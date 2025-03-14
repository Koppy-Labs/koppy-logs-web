import { cn } from '@/utils/cn'

export function AnimatedBadge({
  children,
  size = 'default',
}: {
  children: React.ReactNode
  size?: 'default' | 'sm'
}) {
  return (
    <div
      className={cn(
        'animate-shine w-fit items-center justify-center rounded-full border border-white/10 font-medium text-neutral-200 transition-colors',
        'bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:400%_100%] dark:text-neutral-400',
        size === 'default' ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs',
      )}
    >
      {children}
    </div>
  )
}

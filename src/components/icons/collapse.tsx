import { cn } from '@/utils/cn'

export function Collapse({ className }: { className?: string }) {
  return (
    <svg
      className={cn('size-4', className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 15.75L6.75 2.25"
        stroke="#78716C"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="15.75"
        y="15.75"
        width="13.5"
        height="13.5"
        rx="2"
        transform="rotate(180 15.75 15.75)"
        stroke="#78716C"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

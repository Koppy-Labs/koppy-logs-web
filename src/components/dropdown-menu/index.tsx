'use client'

import { ChevronDownIcon, PlusIcon } from 'lucide-react'
import { motion, stagger, useAnimate } from 'motion/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/utils/cn'

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

  useEffect(() => {
    animate('#menu-icon', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 12px)'
          : 'inset(10% 50% 90% 50% round 12px)',
        opacity: isOpen ? 1 : 0,
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    )

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    )
  }, [isOpen, animate, staggerMenuItems])

  return scope
}

export type DropdownItem = {
  id: string | number
  icon?: React.ReactNode
  name: string
  slug?: string
  href?: string
  onClick?: () => void
}

type DropdownMenuProps = React.ComponentProps<'div'> & {
  items: DropdownItem[]
  triggerIcon?: React.ReactNode
  triggerText?: string
  selectedItemId?: string | number
  onItemSelect?: (item: DropdownItem) => void
  createNewHref?: string
  createNewText?: string
  createNewIcon?: React.ReactNode
  width?: string
  darkMode?: boolean
  groupLabel?: string
}

export function DropDownMenu({
  className,
  items,
  triggerIcon = <ChevronDownIcon size={15} />,
  triggerText = 'Select',
  selectedItemId,
  onItemSelect,
  createNewHref,
  createNewText = 'create new',
  createNewIcon = <PlusIcon size={15} />,
  width = 'w-full max-w-[220px]',
  darkMode = true,
  groupLabel = 'Organizations',
  ...props
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    items.find((item) => item.id === selectedItemId) || items[0],
  )
  const scope = useMenuAnimation(isOpen)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedItemId) {
      const item = items.find((item) => item.id === selectedItemId)
      if (item) setSelectedItem(item)
    }
  }, [selectedItemId, items])

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item)
    setIsOpen(false)
    if (onItemSelect) onItemSelect(item)
    if (item.onClick) item.onClick()
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={cn(`relative ${width}`, className)}
      ref={containerRef}
      {...props}
    >
      <div ref={scope}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className={cn(
            `flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5`,
            darkMode
              ? 'border-neutral-800 bg-neutral-900 focus-visible:border-neutral-700'
              : 'border-neutral-200 bg-neutral-50 focus-visible:border-neutral-300',
            'focus-visible:outline-none',
          )}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <div className="flex items-center gap-2">
            {selectedItem?.icon && <div>{selectedItem.icon}</div>}
            <span
              className={cn(
                'text-sm font-medium',
                darkMode ? 'text-neutral-300' : 'text-neutral-500',
              )}
            >
              {selectedItem?.name || triggerText}
            </span>
          </div>
          <div style={{ transformOrigin: '50% 55%' }}>
            {triggerIcon && <div id="menu-icon">{triggerIcon}</div>}
          </div>
        </motion.button>

        <ul
          className={cn(
            'absolute left-0 right-0 z-50 mt-1 flex flex-col gap-1.5 rounded-xl border px-1.5 py-2.5',
            darkMode
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-50',
            isOpen ? 'pointer-events-auto' : 'pointer-events-none',
          )}
          style={{ clipPath: 'inset(10% 50% 90% 50% round 12px)' }}
        >
          {groupLabel && (
            <div className="mb-1 px-1.5 text-xs font-medium text-neutral-500">
              {groupLabel}
            </div>
          )}

          {items.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link href={item.href}>
                  <button
                    className={cn(
                      'group flex w-full items-center gap-2 rounded-lg border border-transparent py-1 transition-colors',
                      'select-none px-1.5',
                      darkMode
                        ? 'text-neutral-400 hover:text-neutral-300 focus-visible:border-neutral-800 focus-visible:text-neutral-300 hover:bg-neutral-800/60 focus-visible:bg-neutral-800/60'
                        : 'text-neutral-500 hover:text-neutral-600 focus-visible:border-neutral-200 focus-visible:text-neutral-600 hover:bg-neutral-200/40 focus-visible:bg-neutral-200/40',
                      'focus-visible:outline-none',
                    )}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon}
                    <span className="flex items-center gap-1 text-sm font-medium">
                      {item.name}
                    </span>
                  </button>
                </Link>
              ) : (
                <button
                  className={cn(
                    'group flex w-full items-center gap-2 rounded-lg border border-transparent py-1 transition-colors',
                    'select-none px-1.5',
                    darkMode
                      ? 'text-neutral-400 hover:text-neutral-300 focus-visible:border-neutral-800 focus-visible:text-neutral-300 hover:bg-neutral-800/60 focus-visible:bg-neutral-800/60'
                      : 'text-neutral-500 hover:text-neutral-600 focus-visible:border-neutral-200 focus-visible:text-neutral-600 hover:bg-neutral-200/40 focus-visible:bg-neutral-200/40',
                    'focus-visible:outline-none',
                  )}
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon}
                  <span className="flex items-center gap-1 text-sm font-medium">
                    {item.name}
                    <ChevronDownIcon
                      size={12}
                      className="-translate-x-1 scale-0 opacity-0 transition-all group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                    />
                  </span>
                </button>
              )}
            </li>
          ))}

          {createNewHref && (
            <>
              <div className="my-1 h-px bg-neutral-800" />
              <li>
                <Link href={createNewHref}>
                  <button
                    className={cn(
                      'group flex w-full items-center gap-2 rounded-lg border border-transparent py-1 transition-colors',
                      'select-none px-1.5',
                      darkMode
                        ? 'text-neutral-400 hover:text-neutral-300 focus-visible:border-neutral-800 focus-visible:text-neutral-300 hover:bg-neutral-800/60 focus-visible:bg-neutral-800/60'
                        : 'text-neutral-500 hover:text-neutral-600 focus-visible:border-neutral-200 focus-visible:text-neutral-600 hover:bg-neutral-200/40 focus-visible:bg-neutral-200/40',
                      'focus-visible:outline-none',
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {createNewIcon}
                    <span className="text-sm font-medium">{createNewText}</span>
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

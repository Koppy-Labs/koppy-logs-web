import Image from 'next/image'

import { DropDownMenu } from '@/components/dropdown-menu'
import { cn } from '@/utils/cn'

import { useSidebar } from '../ui/sidebar'

export function OrganizationSwitcher() {
  const organizations = [
    {
      id: 1,
      name: 'Void',
      slug: 'void',
      icon: (
        <Image
          src="/logo.png"
          alt="Void"
          width={20}
          height={20}
          className="rounded-sm"
        />
      ),
      href: '/organization/void',
    },
    {
      id: 2,
      name: 'Prodigy Roleplay',
      slug: 'prodigy-roleplay',
      icon: (
        <Image
          src="/logo.png"
          alt="Prodigy"
          width={20}
          height={20}
          className="rounded-sm"
        />
      ),
      href: '/organization/prodigy-roleplay',
    },
  ]

  const { state } = useSidebar()

  return (
    <DropDownMenu
      className={cn(
        state === 'collapsed' && 'hidden',
        'transition-all duration-300 ease-in-out',
      )}
      items={organizations}
      selectedItemId={1}
      createNewHref="/organizations/new"
    />
  )
}

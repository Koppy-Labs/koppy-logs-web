import { AppSidebar } from '@/components/side-bar/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </>
  )
}

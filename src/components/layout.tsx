import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-svh flex-1">
          <div className="flex h-12 items-center border-b px-2">
            <SidebarTrigger />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </TooltipProvider>
  )
}

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="p-12">{children}</main>
    </SidebarProvider>
  );
}

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  BadgeAlertIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  ListIcon,
} from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Issues',
    url: '/dashboard/issues',
    icon: BadgeAlertIcon,
  },
  {
    title: 'History',
    url: '/dashboard/history',
    icon: HistoryIcon,
  },
  {
    title: 'About',
    url: '/dashboard/about',
    icon: ListIcon,
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="ml-2 mt-2 font-serif text-3xl">Sejukin</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>A12F Storage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

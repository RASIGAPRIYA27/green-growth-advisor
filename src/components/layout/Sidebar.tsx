
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  Cloud, 
  Home, 
  LeafyGreen,
  LineChart,
  Settings, 
  ShoppingCart, 
  Users 
} from 'lucide-react';

import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Farmer Profile', path: '/profile' },
  { icon: LeafyGreen, label: 'Crop Management', path: '/crops' },
  { icon: Calendar, label: 'Crop Planner', path: '/planner' },
  { icon: Cloud, label: 'Weather Monitor', path: '/weather' },
  { icon: BarChart3, label: 'Market Trends', path: '/market' },
  { icon: LineChart, label: 'Sustainability', path: '/sustainability' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC = () => {
  return (
    <ShadcnSidebar>
      <SidebarHeader className="px-4 py-2">
        <div className="flex items-center space-x-2">
          <LeafyGreen className="h-6 w-6 text-green-500" />
          <span className="font-bold text-lg text-sidebar-foreground">Green Growth</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;

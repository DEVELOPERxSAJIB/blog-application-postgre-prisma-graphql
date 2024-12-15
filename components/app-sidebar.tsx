"use client";

import * as React from "react";
import {
  Bot,
  Plus,
  Server,
  SquareTerminal,
  Ticket,
  FolderOpen
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Md Sajib",
    email: "sajib@gmail.com.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Create New",
      url: "/create",
      icon: Plus,
    },
    {
      title: "All Posts",
      url: "/blogs",
      icon: SquareTerminal,
      isActive: true,
    },
  ],
  projects: [
    {
      name: "Create New",
      url: "/create-project",
      gitlink : "#",
      icon: Plus,
    },
    {
      name: "Book a Ticket",
      url: "#",
      gitlink : "#",
      icon: Ticket,
    },
    {
      name: "Pro Ecommerce",
      url: "#",
      gitlink : "#",
      icon: Server,
    },
    {
      name: "ChatGPT Clone",
      url: "#",
      gitlink : "#",
      icon: Bot,
    },
    {
      name: "My Portfolio",
      url: "#",
      gitlink : "#",
      icon: FolderOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

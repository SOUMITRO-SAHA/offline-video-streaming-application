import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface CourseConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const courseConfig: CourseConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Courses",
      href: "/courses",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Progress",
      href: "/progress",
    },
  ],
  sidebarNav: [
    {
      title: "Demo",
      items: [
        {
          title: "Demo Video",
          href: "/demo",
          items: [],
        },
      ],
    },
    // This will be dynamic
  ],
};

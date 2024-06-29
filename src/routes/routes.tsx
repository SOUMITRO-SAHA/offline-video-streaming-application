import MainLayout from "@/layouts/main.layout";
import CourseDetailsScreen from "@/screens/course.id.screen";
import CoursesScreen from "@/screens/courses.screen";
import HistoryScreen from "@/screens/history.screen";
import ProfileScreen from "@/screens/profile.screen";
import ProgressScreen from "@/screens/progress.screen";
import { Outlet, createBrowserRouter } from "react-router-dom";
import DashboardScreen from "../screens/dashboard.screen";
import SettingScreen from "@/screens/setting.screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <DashboardScreen />
      </MainLayout>
    ),
  },
  {
    path: "/history",
    element: (
      <MainLayout>
        <HistoryScreen />
      </MainLayout>
    ),
  },
  {
    path: "/courses",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <CoursesScreen />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetailsScreen />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <ProfileScreen />
      </MainLayout>
    ),
  },
  {
    path: "/progress",
    element: (
      <MainLayout>
        <ProgressScreen />
      </MainLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <MainLayout>
        <SettingScreen />
      </MainLayout>
    ),
  },
]);

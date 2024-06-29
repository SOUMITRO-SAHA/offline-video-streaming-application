import CommandMenu from "@/components/command-menu";
import { appConfig } from "@/config/app.config";
import { cn } from "@/lib/utils";
import {
  BarChart2,
  BookMarked,
  History,
  LoaderCircle,
  Play,
  Settings,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface MainAppHeaderProps {
  //Props
}

const MainAppHeader: React.FC<MainAppHeaderProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        {/* Main Nav */}
        <div className="hidden mr-4 md:flex">
          <Link to={"/"} className="flex items-center mr-6 space-x-2">
            <BookMarked className="w-6 h-6" />
            <span className="font-[700]">{appConfig.name}</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              to={"/history"}
              className={cn(
                "transition-colors flex items-center space-x-2 hover:text-foreground/80",
                pathname === "/history"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <History className="w-4 h-4" />
              <span>History</span>
            </Link>
            <Link
              to={"/courses"}
              className={cn(
                "transition-colors flex items-center space-x-2 hover:text-foreground/80",
                pathname === "/courses"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <Play className="w-4 h-4" />
              <span>Courses</span>
            </Link>
            <Link
              to={"/profile"}
              className={cn(
                "transition-colors flex items-center space-x-2 hover:text-foreground/80",
                pathname === "/profile"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <Link
              to={"/progress"}
              className={cn(
                "transition-colors hover:text-foreground/80 flex items-center space-x-2",
                pathname === "/progress"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <LoaderCircle className="w-4 h-4" />
              <span>Progress</span>
            </Link>
            <Link
              to={"/settings"}
              className={cn(
                "transition-colors hover:text-foreground/80 flex items-center space-x-2",
                pathname === "/progress"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <div className="flex-1 w-full md:w-auto md:flex-none">
            <CommandMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainAppHeader;

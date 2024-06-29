import MainAppHeader from "@/components/headers/main-app-header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Header */}
      <MainAppHeader />

      {/* Body */}
      {children}
    </div>
  );
};

export default MainLayout;

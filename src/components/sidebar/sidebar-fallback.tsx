import { Loader2 } from "lucide-react";

export const SidebarFallback = () => {
  return (
    <div className="w-full h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
};

import { cn } from "@/lib/utils";

export const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "flex items-center justify-center mx-auto text-2xl my-3",
        className
      )}
    >
      {children}
    </h1>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Course } from "@/types/course";
import { ChevronsRight, CircleCheckBig, CircleEllipsis } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { SidebarFallback } from "./sidebar-fallback";

interface CourseSidebarProps {
  course: Course;
  show: boolean;
  setShow: (show: boolean) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  course,
  show,
  setShow,
}) => {
  return (
    <>
      <React.Suspense fallback={<SidebarFallback />}>
        <div
          id={course.id}
          className={cn(
            "p-1 px-3 bg-accent font-[600] items-center justify-between flex"
          )}
        >
          <div>{course.title}</div>
          <div className="flex items-center space-x-3">
            <div>
              {course.isCompleted ? (
                <CircleCheckBig className="w-4 h-4 text-green-500" />
              ) : (
                <CircleEllipsis className="w-4 h-4 text-orange-400" />
              )}
            </div>
            <Button
              size={"sm"}
              className="p-1 w-fit h-fit"
              onClick={() => setShow(!show)}
            >
              <ChevronsRight className="w-4 h-4 text-gray-900" />
            </Button>
          </div>
        </div>
        <div className="max-h-[calc(100%-2rem)] px-1">
          <Accordion type="single" collapsible>
            {course.section.map((section, idx) => (
              <AccordionItem
                key={section.id}
                value={`Item-${section.id}`}
                className={cn("border-none no-underline  mb-1")}
              >
                <AccordionTrigger
                  className={cn(
                    "px-3 rounded py-2 bg-accent/20 no-underline",
                    section.isActive && "bg-accent",
                    idx === 0 && "mt-1"
                  )}
                >
                  {section.id}
                </AccordionTrigger>
                <AccordionContent className="p-1 rounded bg-accent/30">
                  <CourseContent {...section} index={idx + 1} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </React.Suspense>
    </>
  );
};

const CourseContent = ({
  title,
  isActive = false,
  isCompleted = false,
  index,
}: {
  title: string;
  isCompleted?: boolean;
  isActive?: boolean;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 p-1 rounded inset-2 shadow-sm border",
        isActive && "border-emerald-500"
      )}
      style={{
        background: isActive
          ? `linear-gradient(to right, #10b981 50%, transparent 50%)`
          : "",
      }}
    >
      {isCompleted && <Checkbox checked={isCompleted} />}
      <p className={cn("flex items-center space-x-2")}>
        <span>{index}.</span>
        <span>{title}</span>
      </p>
    </div>
  );
};

export default CourseSidebar;

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { ChevronRight, History } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  return (
    <main className="">
      {/* Last Played */}
      <section className="container mx-auto mb-5">
        <RecentCourses />
      </section>

      <Separator />

      {/* All Courses */}
      <section className="container mx-auto">
        <AllCourses />
      </section>
    </main>
  );
};

const demoCourses = [
  {
    courseId: "1",
    title: "Course 1",
    image: null,
  },
  {
    courseId: "2",
    title: "Course 2",
    image: null,
  },
];

const RecentCourses = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full my-3 space-x-2">
          <History className="w-5 h-5" />
          <span>Recent</span>
        </div>

        <Link
          to={"/history"}
          className={cn(
            buttonVariants({
              variant: "link",
              size: "sm",
              className: "whitespace-nowrap w-fit text-gray-400 inline-flex",
            })
          )}
        >
          <span className="mr-3">See more</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-1">
        {demoCourses.map((course) => (
          <div key={course.courseId} className="col-span-4 xl:col-span-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Card className="p-2">
                    {course.image ? (
                      <img src={course.image} alt={course.title} className="" />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full rounded min-h-20 xl:h-32 bg-accent">
                        <h4 className={cn("font-[700]")}>{course.title}</h4>
                      </div>
                    )}
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{course.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </>
  );
};

const AllCourses = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full my-3 space-x-2">
          <History className="w-5 h-5" />
          <span>All Courses</span>
        </div>

        <Link
          to={"/courses"}
          className={cn(
            buttonVariants({
              variant: "link",
              size: "sm",
              className: "whitespace-nowrap w-fit text-gray-400 inline-flex",
            })
          )}
        >
          <span className="mr-3">See more</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-1">
        {demoCourses.map((course) => (
          <Link
            to={`/courses/${course.courseId}`}
            key={course.courseId}
            className="col-span-4 xl:col-span-2"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Card className="p-2">
                    {course.image ? (
                      <img src={course.image} alt={course.title} className="" />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full rounded min-h-20 xl:h-32 bg-accent">
                        <h4 className={cn("font-[700]")}>{course.title}</h4>
                      </div>
                    )}
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{course.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DashboardScreen;

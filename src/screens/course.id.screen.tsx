import CourseSidebar from "@/components/sidebar/course-sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VideoPlayer } from "@/components/video";
import { cn } from "@/lib/utils";
import { VideoPlayerProps } from "@/types/player";
import { ChevronsLeft } from "lucide-react";
import * as React from "react";

const demo_course = {
  id: "dfk",
  title: "Course 1",
  isCompleted: false,
  isActive: false,
  archive: false,
  favorite: false,
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  section: [
    {
      id: "dfkdf",
      title: "Section 1",
      isActive: true,
      isCompleted: true,
    },
    {
      id: "dfkdffdfdfd",
      title: "Section 2",
      isActive: false,
    },
  ],
};

const CourseDetailsScreen = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  const defaultPlayer: VideoPlayerProps = {
    options: {
      url: "https://youtu.be/BY_ZjPGqJJk?si=PuuEyYeTE55LdVzz",
    },
  };

  return (
    <main className="mx-auto grid grid-cols-12 w-full h-[calc(100vh-4rem)]">
      <section
        className={cn(
          "bg-secondary relative",
          showSidebar ? "col-span-8" : "col-span-full"
        )}
      >
        <VideoPlayer {...defaultPlayer} />

        {!showSidebar && (
          <div className="absolute z-20 top-1 right-1">
            <Button
              size={"sm"}
              className="w-8 h-8 p-1"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
          </div>
        )}
      </section>

      <section
        className={cn(
          " border-l backdrop-blur-2",
          showSidebar ? "col-span-4" : "hidden"
        )}
      >
        <ScrollArea className="h-[calc(100vh-4rem)] w-full">
          <CourseSidebar
            course={demo_course}
            show={showSidebar}
            setShow={setShowSidebar}
          />
        </ScrollArea>
      </section>
    </main>
  );
};

export default CourseDetailsScreen;

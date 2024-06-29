import DemoVideo from "@/assets/demo.mp4";
import { VideoPlayerProps } from "@/types/player";
import * as React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "../ui/aspect-ratio";
import { Fallback } from "./fallback";
import { cn } from "@/lib/utils";

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  return (
    <div className="flex items-center justify-center w-full max-h-screen p-3 mx-auto rounded xl:p-12 h-fit">
      <AspectRatio ratio={16 / 9} className={cn("max-h-screen")}>
        <React.Suspense fallback={<Fallback />}>
          <ReactPlayer
            controls
            url={options.url ?? DemoVideo}
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              maxWidth: "100vw",
              maxHeight: "100vh",
            }}
          />
        </React.Suspense>
      </AspectRatio>
    </div>
  );
};

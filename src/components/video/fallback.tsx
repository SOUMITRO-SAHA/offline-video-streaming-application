import * as React from "react";
import { Button } from "../ui/button";

export const Fallback = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100">
      <p className="mb-4 text-lg font-semibold text-center text-gray-700">
        Something went wrong. The content couldn't load at this time.
      </p>
      <p className="mb-6 text-center text-gray-500">
        Please try again later or reload the application.
      </p>
      <Button
        onClick={handleReload}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Reload
      </Button>
    </div>
  );
};

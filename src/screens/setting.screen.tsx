import { PageTitle } from "@/components/general";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { appConfig } from "@/config/app.config";
import * as React from "react";

const SettingScreen = () => {
  const { theme, setTheme } = useTheme();
  const [platform, setPlatform] = React.useState<
    "unknown" | "linux" | "windows" | "macos"
  >("unknown");
  React.useEffect(() => {
    // Todo: get the platform info from rust
    const platformInfo = "linux";

    setPlatform(platformInfo);
  }, []);
  return (
    <main className="w-screen h-[calc(100vh-3.6rem)] overflow-hidden bg-muted">
      <PageTitle className="py-6 my-0">Settings</PageTitle>

      <section className="container mx-auto">
        <h2 className="my-3 text-xl font-medium text-muted-foreground">
          Application Settings
        </h2>

        <div className="flex items-center space-x-6">
          <h3 className="w-32">Default Storage</h3>
          <Input
            className="h-9 w-96"
            value={
              platform === "linux"
                ? appConfig.defaultStorage
                : "No Default Storage is selected please select a default storage"
            }
          />

          <Button size={"sm"} className="">
            Change
          </Button>
        </div>
      </section>

      <Separator className="w-full my-8 bg-white/20" />

      <section className="container flex flex-col mx-auto space-y-3">
        <h2 className="text-xl font-medium text-muted-foreground">
          UI Settings
        </h2>

        <div className="flex items-center space-x-6">
          <h3 className="w-32">Theme</h3>
          <Select
            onValueChange={(value: "light" | "dark" | "system") =>
              setTheme(value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={theme} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-6">
          <h3 className="w-36">Request UI Improvement</h3>
          <div className="w-full">
            <Textarea rows={5} className="mb-3" />
            <Button variant={"outline"} size={"sm"}>
              Submit
            </Button>
          </div>
        </div>
      </section>

      <Separator className="w-full my-8 bg-white/20" />

      <section className="container mx-auto">
        <h2 className="my-3 text-xl font-medium text-muted-foreground">User</h2>

        <div className="flex items-center space-x-6">
          <h3 className="w-32">Update User Info</h3>
          <Button size={"sm"}>Update</Button>
        </div>
      </section>
    </main>
  );
};

export default SettingScreen;

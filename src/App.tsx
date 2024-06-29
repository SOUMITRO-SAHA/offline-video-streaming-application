import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./routes/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Body */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

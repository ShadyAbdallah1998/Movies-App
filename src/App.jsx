import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";

function App() {
  return (
    <>
      {/* Error handling */}
      <ErrorBoundary fallback={<h1>Page not found</h1>}>
        <RouterProvider router={routes} />
      </ErrorBoundary>
    </>
  );
}

export default App;

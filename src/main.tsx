import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/utils/middleware.ts";
import { UI_OPTIONS } from "@mcsoud/react-ui";
import { Modals } from "./types/_utils.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, staleTime: 120_000 },
  },
});

declare module "@mcsoud/react-ui" {
  interface ModalsRegistration {
    modals: Modals;
  }
}

UI_OPTIONS.loading = <p>Loading...</p>;
UI_OPTIONS.error = <p>Oops</p>;
UI_OPTIONS.errorToast = "Error yow";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>,
);

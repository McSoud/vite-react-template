import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/utils/middleware.ts";
import { laravelOptions } from "@mcsoud/laravel";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, staleTime: 120_000 },
  },
});

laravelOptions.loading = <p>Loading...</p>;
laravelOptions.error = <p>Oops</p>;
laravelOptions.errorToast = "Error yow";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>,
);

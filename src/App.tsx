import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";
import Search from "./pages/Search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<Product />} path="/product/:productId" />
            <Route element={<Search />} path="/search/:productName" />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

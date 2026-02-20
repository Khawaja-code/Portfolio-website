import { Toaster } from "./components/ui/toaster.jsx";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <Layout>
        <Toaster />
        <Outlet />
      </Layout>
    </>
  );
}

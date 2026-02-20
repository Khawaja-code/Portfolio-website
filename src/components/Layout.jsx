import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}

      {children}
    </>
  );
}

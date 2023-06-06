import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/Pages/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Home />
    </>
  );
}

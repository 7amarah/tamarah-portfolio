import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
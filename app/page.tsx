import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
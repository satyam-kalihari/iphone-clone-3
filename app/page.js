import Image from "next/image";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

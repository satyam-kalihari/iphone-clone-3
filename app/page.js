import Image from "next/image";

import Navbar from "./constants/Navbar";
import Hero from "./constants/Hero";
import Highlights from "./constants/Highlights";

export default function Home() {
  return (
  <main>
    <Navbar />
    <Hero />
    <Highlights />
  </main>
  )
}

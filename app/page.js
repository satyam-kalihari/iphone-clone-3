import Image from "next/image";

import Navbar from "./constants/Navbar";
import Hero from "./constants/Hero";
import Highlights from "./constants/Highlights";
import Model from "./constants/Model";

export default function Home() {
  return (
  <main>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
  </main>
  )
}

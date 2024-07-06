import { Bigname } from "@/components/Bigname";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero2 />
      <Bigname />
    </main>
  );
}

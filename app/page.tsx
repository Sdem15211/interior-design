import { Bigname } from "@/components/Bigname";
import { Expertise } from "@/components/Expertise";
import { Imgslider } from "@/components/Imgslider";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero2 />
      <Bigname />
      {/* <Imgslider /> */}
      <Expertise />
    </main>
  );
}

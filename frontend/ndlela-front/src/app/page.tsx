import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";

export default function Page() {
  return (
    <div className="">
      <section>
        <Navbar/>
        <Hero/>
        <About/>
      </section>
    </div>
  );
}
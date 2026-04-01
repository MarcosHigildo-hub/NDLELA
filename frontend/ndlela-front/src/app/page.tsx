import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Problem from "../components/landing/Problem";
import Solution from "../components/landing/Solution";
import Roadmap from "../components/landing/Roadmap";

export default function Page() {
  return (
    <div className="">
      <section>
        <Navbar/>
        <Hero/>
        <About/>
        <Problem/>
        <Solution/>
        <Roadmap/>
      </section>
    </div>
  );
}
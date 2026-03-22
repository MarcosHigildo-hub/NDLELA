import Container from "../layout/Container";
import Button from "../ui/Button";
import Image from "next/image";
import { Bus, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/heroSection.png"
          alt="City mobility background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            id="routePath"
            d="M0,400 C200,300 300,500 500,400 S800,300 1000,400"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="1100"
            strokeDashoffset="1100"
            className="animate-route opacity-20"
          />
       
          <Bus className="animate-bus text-primary opacity-50" />
        </svg>
      </div>

      <div className="relative z-20 flex h-full items-center">
        <Container>
          <div className="max-w-2xl text-white">
            <h2 className="tracking-tight animate-fade-up-slow [animation-delay:0.3s] opacity-0">Navegue pela cidade sem <span className="text-accent">barreiras.</span></h2>

            <p className="mt-4 text-white/80 animate-fade-up-slow [animation-delay:0.8s] opacity-0">
              <span className="text-primary font-bold">NDLELA</span> conecta-te ao que importa. A solução de mobilidade pensada para transformar o movimento urbano no nosso dia a dia.
            </p>

            <div className="mt-6 flex sm:flex-row flex-col gap-8 animate-fade-up-slow [animation-delay:1.3s] opacity-0">
              <Button>
                Explorar Rotas
                <ArrowRight size={16}/>
              </Button>

              <Button variant="outline">
                Saber Mais
                <MapPin size={16}/>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

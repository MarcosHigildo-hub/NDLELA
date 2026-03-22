import Container from "../layout/Container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Mapeamento comunitário de rotas",
    "Acesso livre à informação de transporte",
    "Mobilidade pensada para Moçambique",
    // "Feito por Moçambicanos para Moçambicanos",
  ];
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="md:hidden relative w-full h-40">
            <Image
              src="/about-ndlela.svg"
              alt="Ndlela mobilty illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6 ">
            <div className="space-y-2 animate-fade-up-slow [animation-delay:0.3s] opacity-0">
              <h1>
                Encontra o teu <span className="text-accent">caminho</span>
              </h1>

              <h3 className="">
                Mais que um mapa, o teu{" "}
                <span className="text-primary uppercase">Ndlela</span>.
              </h3>
            </div>

            <p className="animate-fade-up-slow [animation-delay:0.8s] opacity-0">
              Em várias línguas locais da África Austral,{" "}
              <span className="text-primary uppercase font-bold">Ndlela</span>{" "}
              significa caminho. O nosso propósito é transformar a mobilidade
              em{" "}
              <span className="text-accent font-semibold">Moçambique </span>{" "}
              através do mapeamento comunitário, garantindo que o acesso à
              informação de{" "}
              <span className="text-accent font-semibold">transporte</span> seja
              um direito de todos.
            </p>

            <ul className="space-y-4 ml-4 animate-fade-up-slow [animation-delay:1.3s] opacity-0">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-primary" size={20} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block relative w-full md:h-100">
            <Image
              src="/about-ndlela.svg"
              alt="Ndlela mobilty illustration"
              fill
              className="object-contain animate-fade-up-slow [animation-delay:0.3s] opacity-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

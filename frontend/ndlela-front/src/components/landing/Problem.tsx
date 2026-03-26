import Container from "../layout/Container";
import Image from "next/image";
import { Clock, Banknote, MapPinned, AlertCircle } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Clock className="text-accent" />,
      title: "Rota Errada",
      description:
        "Entrar no transporte errado ou perder a paragem certa faz a viagem ficar mais longa e confusa.",
    },
    {
      icon: <Banknote className="text-accent" />,
      title: "Tarifas Incertas",
      description:
        "Dificuldade em saber o custo exato da viagem entre diferentes terminais e conexões.",
    },
    {
      icon: <MapPinned className="text-accent" />,
      title: "Rotas Invisíveis",
      description:
        "Linhas de transporte que mudam ou não estão documentadas em nenhum lugar oficial.",
    },
    {
      icon: <AlertCircle className="text-accent" />,
      title: "Dependência",
      description:
        "A única forma de se orientar é perguntar a estranhos, o que nem sempre é fiável.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="hidden md:block relative aspect-video w-full md:max-h-100 md:aspect-square">
            <Image
              src="/problem.png"
              alt="Problem illustration"
              fill
              className="object-contain animate-fade-up-slow [animation-delay:0.3s] opacity-0"
              priority
            />
          </div>

          <div className="space-y-6 ">
            <div className="space-y-2">
              <h1 className="animate-fade-up-slow [animation-delay:0.3s] opacity-0">
                O caos da <span className="text-accent">incerteza</span>
              </h1>

              <h3 className="animate-fade-up-slow [animation-delay:0.8s] opacity-0">
                Todos os dias, milhares de pessoas saem de casa sem saber
                exatamente como vão chegar ao{" "}
                <span className="text-primary">destino</span>.
              </h3>
            </div>

            {/* <p className="">
              Sem <span className="text-accent font-semibold">rotas</span>{" "}
              claras, sem informação confiável e muitas vezes sem saber quanto
              vão <span className="text-accent font-semibold">gastar</span> no
              caminho.
            </p> */}

            <div className="grid gap-4 md:grid-cols-2 animate-fade-up-slow [animation-delay:1.3s] opacity-0">
              {problems.map((prob, index) => (
                <div
                  key={index}
                  className="flex gap-2 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-yellow-50 w-fit rounded-lg flex items-center">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-primary">{prob.title}</h3>
                    <p className="text-zinc-500 text-sm">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "../layout/Container";
import { CheckCircle2, ArrowBigRight } from "lucide-react";

export default function Roadmap() {
  type Status = "done" | "current" | "upcoming";

  interface Phase {
    title: string;
    status: Status; // Aqui garantimos que não é uma string qualquer
    items: string[];
  }

  const phases: Phase[] = [
    {
      title: "Fase 1 - Fundação",
      status: "done",
      items: ["Identidade Visual", "Landing Page", "Estrutura do projecto", "Repositório Open Source"],
    },
    {
      title: "Fase 2 - Mapeamento",
      status: "current",
      items: [
        "Recolha comunitária de dados",
        "Registo de rotas informais (chapas)",
        "Identificação de paragens reais",
        "Primeiros fluxos de contribuição",
      ],
    },
    {
      title: "Fase 3 - Plataforma",
      status: "upcoming",
      items: [
        "Visualização no mapa",
        "Busca de trajetos",
        "Sugestão de caminhos possíveis",
        "Informação básica de rotas"
      ],
    },
    {
      title: "Fase 4 - Comunidade",
      status: "upcoming",
      items: [
        "Sistema avançado de contribuição",
        "Validação de dados pela comunidade",
        "perfis de contribuidores",
        "Expansão para novos locais"
      ],
    },
  ];

  const statusStyles: Record<Status, {card: string; dot: string; text: string; badge: string; icon: string}> = {
    done: {
      card: "bg-zinc-50 border-zinc-200 opacity-60",
      dot: "bg-zinc-400",
      text: "text-zinc-500",
      badge: "hidden",
      icon: "✓",
    },
    current: {
      card: "bg-white border-primary shadow-2xl scale-105 ring-2 ring-primary/10",
      dot: "bg-primary animate-pulse",
      text: "text-dark",
      badge: "inline-block",
      icon: "→",
    },
    upcoming: {
      card: "bg-white border-zinc-200 border-dashed opacity-80",
      dot: "bg-zinc-200",
      text: "text-zinc-400",
      badge: "hidden",
      icon: "○",
    },
  };

  return (
    <section className="py-24 overflow-hidden">
      <Container>
        <div className="">
          <div className="max-w-2xl mb-16 animate-fade-up-slow [animation-delay:0.3s] opacity-0">
            <h1>
              Roadmap do <span className="text-primary">NDLELA</span>
            </h1>

            <p className="mt-4 text-dark/70">
              Cada fase aproxima-nos de uma{" "}
              <span className="text-accent font-semibold">mobilidade</span> mais
              acessível, clara e construída em conjunto.
            </p>
          </div>

          <div className="relative animate-fade-up-slow [animation-delay:0.8s] opacity-0">
            {/* Timeline */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block " />

            <div className="space-y-4 md:-space-y-12">
              {phases.map((phase, index) => {
                const style = statusStyles[phase.status];
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:felx-row items-center justify-center min-h-[120px]"
                  >
                    {/* Circulos desktop only */}
                    <div
                      className={`
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full z-10 hidden md:block
                    ${
                      phase.status === "done"
                        ? "bg-accent"
                        : phase.status === "current"
                          ? "bg-primary animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.7)]"
                          : "bg-gray-300"
                    }`}
                    />

                    {/* card container */}
                    <div
                      className={`flex w-full items-center ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}
                    >
                      {/* Spacer */}
                      <div className="hidden md:block md:w-1/2" />

                      {/* line conector */}

                      <div
                        className={`hidden md:block w-10 h-0.5 ${style.dot}`}
                      />

                      {/* card */}
                      <div
                        className={`
                    z-20 w-full md:w-85 p-7 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-500 
                    ${style.card}
                   
                    `}
                      >
                         {/* <span
                          className={`px-2 py-1 rounded-md text-[10px] font-black bg-primary text-white uppercase tracking-tighter ${style.badge}`}
                        >
                          A decorrer
                        </span> */}
                        <h3 className={`font-black ${style.text}`}>
                          {phase.title}
                        </h3>

                        <ul className="space-y-2 mt-4">
                          {phase.items.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-center gap-3 text-sm font-medium ${style.text}`}
                            >
                              <span className="text-primary font-bold ">
                                {style.icon}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block md:grow" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

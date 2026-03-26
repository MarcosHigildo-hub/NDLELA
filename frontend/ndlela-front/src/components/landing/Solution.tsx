import Container from "../layout/Container";
import Button from "../ui/Button";
import Image from "next/image";
import { Users, Map, Compass, Code, MapPin, Github } from "lucide-react";

export default function Solution() {
  const soluctions = [
    {
      title: "Dados locais",
      description:
        "Rotas e paragens são adicionadas por pessoas reais, com conhecimento local.",
      icon: Users,
    },
    {
      title: "Acesso livre",
      description:
        "Dados simples, organizados e disponíveis para qualquer pessoa.",
      icon: Map,
    },
    {
      title: "Guia intuitivo",
      description: "Sabe para onde ir, como chegar e que opções tens.",
      icon: Compass,
    },
    {
      title: "Código aberto",
      description: "Construído por uma comunidade aberta, para todos.",
      icon: Code,
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1>
                Solução <span className="text-accent">colaborativa</span>
              </h1>

              <p>
                O <span className="text-primary font-bold">NDLELA</span> não é
                apenas uma ferramenta. É uma plataforma aberta que organiza
                rotas, liga pessaos e transforma a forma como nos movemos.
              </p>
            </div>
          </div>

          <div className="space-y-20">
            <div className="hidden md:block relative w-full h-50">
              <Image
                src="/solution.png"
                alt="Community building solution"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="grid gap-4 md:grid-cols-4 mt-12 ">
            {soluctions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-2 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-yellow-50 w-fit rounded-lg flex items-center">
                    <Icon className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 max-w-2xl">
            <h3>
              Este projecto é <span className="text-primary">Open source</span>
            </h3>

            <p>
              Estamos a construir o{" "}
              <span className="text-primary font-bold uppercase">Ndlela</span>{" "}
              com a ajuda de developers, estudantes e pessoas interessadas em
              melhorar a{" "}
              <span className="text-accent font-semibold">mobilidade</span>.
              Junta-te a nós e faz parte desta mudança.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button>
                Fazer parte do NDLELA
                <Github size={16} />
              </Button>

              <Button variant="outline-dark">
                Saber mais
                <MapPin size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

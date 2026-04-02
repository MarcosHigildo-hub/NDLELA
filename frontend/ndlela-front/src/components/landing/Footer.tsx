import Container from "../layout/Container";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <Container>
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="mb-3 text-primary">NDLELA</h3>
            <p className="text-dark/70 text-sm">
              O NDLELA é uma plataforma aberta que organiza rotas de transport informal através de dados comunitários
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Projecto</h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li>
                <a href="#sobre" className="nav-link">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#roadmap" className="nav-link">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#contribuir" className="nav-link">
                  Contribuir
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Open Source</h4>
            <ul className="space-y-2 text-sm text-dark/70 ">
              <li>
                <a
                  href="https:/github.com/"
                  target="blank"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Como contribuir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li>
                <a href="#" className="hover:text-primary">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-dark/60">
          © {new Date().getFullYear()} NDLELA — Construído em comunidade
        </div>
      </Container>
    </footer>
  );
}

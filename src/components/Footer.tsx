import { Link } from "react-router-dom";
import { Box, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="gradient-accent rounded-lg p-2">
                <Box className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">ModelCraft</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Moldes 3D de alta precisão para a indústria metalúrgica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Início
                </Link>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Quem Somos
                </a>
              </li>
              <li>
                <Link to="/orcamento" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contato@modelcraft.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-bold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Segunda - Sexta</li>
              <li className="font-semibold text-primary-foreground">08:00 - 18:00</li>
              <li className="mt-4">Sábado</li>
              <li className="font-semibold text-primary-foreground">08:00 - 12:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} ModelCraft. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

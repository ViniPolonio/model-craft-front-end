import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Box, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-fast hover:opacity-80">
            <div className="gradient-accent rounded-lg p-2">
              <Box className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              ModelCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-fast hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Início
            </Link>
            <Link
              to="/orcamento"
              className={`text-sm font-medium transition-fast hover:text-primary ${
                isActive("/orcamento") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Orçamento
            </Link>
            <Button asChild variant="hero" size="default">
              <Link to="/orcamento">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-fast"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-fast ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                Início
              </Link>
              <Link
                to="/orcamento"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-fast ${
                  isActive("/orcamento")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                Orçamento
              </Link>
              <Button asChild variant="hero" size="default" className="w-full">
                <Link to="/orcamento" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { Factory, Award, Users } from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Quem Somos</h2>
            <div className="w-20 h-1 gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pioneiros em soluções de modelagem 3D para a indústria metalúrgica
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Story */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-primary">Nossa História</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A <span className="font-semibold text-foreground">ModelCraft</span> é uma empresa especializada em desenvolvimento de 
                  moldes 3D de alta precisão para a indústria metalúrgica. Fundada em 2010, 
                  nascemos da visão de revolucionar o processo de prototipagem industrial através 
                  da tecnologia de ponta.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de uma década de experiência, atendemos desde pequenas empresas até 
                grandes indústrias, oferecendo protótipos rápidos e soluções inovadoras para 
                produção industrial. Nossa equipe de especialistas combina expertise técnica 
                com paixão pela excelência.
              </p>
            </div>

            {/* Image/Visual placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-hero overflow-hidden shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Factory className="h-32 w-32 text-primary-foreground/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="border-2 border-border hover:border-primary transition-smooth hover:shadow-soft">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Tecnologia Avançada</h4>
                <p className="text-muted-foreground">
                  Utilizamos os softwares mais modernos de modelagem 3D para garantir precisão milimétrica.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-smooth hover:shadow-soft">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-2">Qualidade Certificada</h4>
                <p className="text-muted-foreground">
                  Processos certificados e validados que garantem a máxima qualidade em cada projeto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-smooth hover:shadow-soft">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/20">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Equipe Especializada</h4>
                <p className="text-muted-foreground">
                  Profissionais experientes dedicados a transformar suas necessidades em soluções.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

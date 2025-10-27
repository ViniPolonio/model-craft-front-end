import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export const MissionVisionValues = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Nossos Pilares</h2>
            <div className="w-20 h-1 gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Os valores que guiam nossa jornada rumo à excelência
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <Card className="group border-2 border-border hover:border-primary transition-smooth hover:shadow-soft overflow-hidden">
              <div className="h-2 gradient-hero" />
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções de modelagem 3D de alta precisão que impulsionem a inovação 
                  e eficiência na indústria metalúrgica, superando as expectativas dos nossos clientes 
                  com tecnologia de ponta e atendimento personalizado.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="group border-2 border-border hover:border-accent transition-smooth hover:shadow-accent overflow-hidden">
              <div className="h-2 gradient-accent" />
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <Eye className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em desenvolvimento de moldes 3D, reconhecida pela excelência 
                  técnica, inovação constante e compromisso com o sucesso dos nossos parceiros industriais, 
                  expandindo nossa atuação para novos mercados.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="group border-2 border-border hover:border-secondary transition-smooth hover:shadow-soft overflow-hidden">
              <div className="h-2 bg-secondary" />
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-smooth">
                  <Heart className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span><strong className="text-foreground">Precisão:</strong> Compromisso com a excelência técnica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span><strong className="text-foreground">Inovação:</strong> Busca constante por novas soluções</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span><strong className="text-foreground">Confiabilidade:</strong> Parceria de longo prazo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span><strong className="text-foreground">Sustentabilidade:</strong> Responsabilidade ambiental</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

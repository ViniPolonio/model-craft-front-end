import { QuoteForm } from "@/components/QuoteForm";
import { Calculator } from "lucide-react";

const Quote = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Orçamento Instantâneo</span>
          </div>

          <h1 className="mb-6">
            Solicite seu{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Orçamento
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            Envie seu modelo 3D e receba uma estimativa de valor em tempo real.
            Processo rápido, simples e sem compromisso.
          </p>
        </div>

        {/* Form */}
        <QuoteForm />

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">1</div>
            <h4 className="font-semibold mb-2">Envie o Arquivo</h4>
            <p className="text-sm text-muted-foreground">
              Faça upload do seu modelo 3D em formato .stp ou .x_t
            </p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">2</div>
            <h4 className="font-semibold mb-2">Visualize o Preview</h4>
            <p className="text-sm text-muted-foreground">
              Confira a visualização 3D do seu modelo antes de continuar
            </p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">3</div>
            <h4 className="font-semibold mb-2">Receba o Orçamento</h4>
            <p className="text-sm text-muted-foreground">
              Obtenha uma estimativa detalhada em poucos segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

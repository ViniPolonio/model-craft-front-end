import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileCheck, Loader2, DollarSign, CheckCircle2 } from "lucide-react";
import { ModelViewer } from "./ModelViewer";
import { toast } from "sonner";

type QuoteStep = "upload" | "config" | "calculating" | "result";

const MATERIAIS_DISPONIVEIS = [
  "Aluminio Laminado",
  "Aluminio Fundido",
  "Aço Especial",
  "Polímero Reforçado"
];

export const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState<QuoteStep>("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(1);
  const [incluirIsopor, setIncluirIsopor] = useState<boolean>(true);
  const [incluirEstrutura, setIncluirEstrutura] = useState<boolean>(true);
  const [incluirGrampos, setIncluirGrampos] = useState<boolean>(true);
  const [quoteValue, setQuoteValue] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file extension
    const validExtensions = [".stp", ".x_t"];
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
      toast.error("Formato inválido! Por favor, envie apenas arquivos .stp ou .x_t");
      return;
    }

    setSelectedFile(file);
    setCurrentStep("config");
    toast.success(`Arquivo ${file.name} carregado com sucesso!`);
  };

  const handleCalculateQuote = () => {
    if (!selectedMaterial) {
      toast.error("Por favor, selecione um material!");
      return;
    }

    setCurrentStep("calculating");

    // Simulate calculation with configured parameters
    setTimeout(() => {
      // Base value calculation (simulated)
      let baseValue = Math.floor(Math.random() * (5000 - 1500 + 1)) + 1500;
      
      // Apply multipliers based on configurations
      if (incluirIsopor) baseValue += 200;
      if (incluirEstrutura) baseValue += 350;
      if (incluirGrampos) baseValue += 150;
      
      // Quantity multiplier
      const totalValue = baseValue * quantidade;
      
      setQuoteValue(totalValue);
      setCurrentStep("result");
      toast.success("Orçamento calculado com sucesso!");
    }, 3000);
  };

  const handleReset = () => {
    setCurrentStep("upload");
    setSelectedFile(null);
    setSelectedMaterial("");
    setQuantidade(1);
    setIncluirIsopor(true);
    setIncluirEstrutura(true);
    setIncluirGrampos(true);
    setQuoteValue(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Upload Step */}
      {currentStep === "upload" && (
        <Card className="border-2 border-dashed border-border hover:border-primary transition-smooth">
          <CardContent className="pt-12 pb-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 inline-flex p-6 rounded-full bg-primary/10">
                <Upload className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Envie seu modelo 3D</h3>
              <p className="text-muted-foreground mb-8 max-w-md">
                Arraste e solte seu arquivo ou clique para selecionar. Aceitamos arquivos .stp e .x_t
              </p>

              <Input
                ref={fileInputRef}
                type="file"
                accept=".stp,.x_t"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload">
                <Button asChild variant="hero" size="lg">
                  <span className="cursor-pointer">
                    <Upload className="mr-2 h-5 w-5" />
                    Selecionar Arquivo
                  </span>
                </Button>
              </Label>

              <p className="text-xs text-muted-foreground mt-4">
                Formatos aceitos: .stp, .x_t • Tamanho máximo: 50MB
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Configuration Step */}
      {currentStep === "config" && selectedFile && (
        <div className="space-y-6 animate-fade-in">
          <Card className="border-2 border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  Trocar Arquivo
                </Button>
              </div>
            </CardContent>
          </Card>

          <ModelViewer fileName={selectedFile.name} />

          {/* Product Configuration */}
          <Card className="border-2 border-border">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Parâmetros de Produção</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  A API irá analisar automaticamente o arquivo 3D. Configure apenas os parâmetros que não podem ser extraídos do modelo.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Material Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="material">Material Principal *</Label>
                    <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                      <SelectTrigger id="material">
                        <SelectValue placeholder="Selecione o material" />
                      </SelectTrigger>
                      <SelectContent>
                        {MATERIAIS_DISPONIVEIS.map((material) => (
                          <SelectItem key={material} value={material}>
                            {material}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantidade</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantidade}
                      onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                    />
                  </div>
                </div>

                {/* Optional Components */}
                <div className="mt-6">
                  <Label className="text-base font-semibold mb-3 block">Componentes Adicionais</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isopor"
                        checked={incluirIsopor}
                        onCheckedChange={(checked) => setIncluirIsopor(checked as boolean)}
                      />
                      <label
                        htmlFor="isopor"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Incluir Isopor
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="estrutura"
                        checked={incluirEstrutura}
                        onCheckedChange={(checked) => setIncluirEstrutura(checked as boolean)}
                      />
                      <label
                        htmlFor="estrutura"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Incluir Estrutura
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="grampos"
                        checked={incluirGrampos}
                        onCheckedChange={(checked) => setIncluirGrampos(checked as boolean)}
                      />
                      <label
                        htmlFor="grampos"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Incluir Grampos
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" onClick={handleReset}>
              Cancelar
            </Button>
            <Button variant="hero" size="lg" onClick={handleCalculateQuote}>
              Calcular Orçamento
            </Button>
          </div>
        </div>
      )}

      {/* Calculating Step */}
      {currentStep === "calculating" && (
        <Card className="border-2 border-primary animate-fade-in">
          <CardContent className="pt-12 pb-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <Loader2 className="h-16 w-16 text-primary animate-spin relative" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Calculando orçamento...</h3>
              <p className="text-muted-foreground max-w-md">
                Estamos analisando seu modelo 3D e calculando o melhor orçamento. 
                Isso pode levar alguns segundos.
              </p>
              <div className="mt-8 w-64 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-accent animate-pulse w-2/3" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Result Step */}
      {currentStep === "result" && (
        <div className="space-y-6 animate-fade-in">
          <Card className="border-2 border-accent shadow-accent">
            <CardContent className="pt-12 pb-12">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6 inline-flex p-6 rounded-full bg-accent/10">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Orçamento Calculado!</h3>
                <p className="text-muted-foreground mb-8">
                  Baseado nas especificações do seu modelo 3D
                </p>

                <div className="gradient-hero rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <DollarSign className="h-8 w-8 text-primary-foreground" />
                    <p className="text-5xl font-bold text-primary-foreground">
                      R$ {quoteValue.toLocaleString("pt-BR")}
                    </p>
                  </div>
                  <p className="text-primary-foreground/80 text-sm">Valor estimado</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8 w-full max-w-3xl">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Material</p>
                    <p className="font-bold text-sm">{selectedMaterial}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Quantidade</p>
                    <p className="font-bold">{quantidade} {quantidade === 1 ? 'unidade' : 'unidades'}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Prazo</p>
                    <p className="font-bold">7-10 dias</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" onClick={handleReset}>
                    Novo Orçamento
                  </Button>
                  <Button variant="hero" size="lg">
                    Confirmar Pedido
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-6">
                  * Este é um orçamento estimado. Entre em contato para confirmar valores finais.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

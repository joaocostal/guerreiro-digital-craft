import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Type, Sticker, Lightbulb, Car, MapPin, Gift } from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Fachadas",
      description: "Fachadas bem estruturadas e criativas são investimentos que fazem toda diferença e dão credibilidade, além de agregar mais valor aos seus produtos.",
      cta: "Transforme sua fachada"
    },
    {
      icon: <Type className="w-8 h-8 text-primary" />,
      title: "Letras Caixa",
      description: "Letreiros modernos e sofisticados com materiais como ACM, acrílico e PVC. Produzimos com alta qualidade que se adequa ao seu orçamento.",
      cta: "Destaque sua marca"
    },
    {
      icon: <Sticker className="w-8 h-8 text-primary" />,
      title: "Adesivos",
      description: "Adesivos vinil personalizados para ambientes com elegância. Crie estampas únicas adaptadas ao seu estilo e personalidade.",
      cta: "Personalize agora"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Luminosos",
      description: "Painéis luminosos com design incrível usando materiais de alta qualidade como ACM e acrílico para garantir durabilidade.",
      cta: "Ilumine sua marca"
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Envelopamento de Frotas",
      description: "Forme mais eficiente de divulgar sua empresa. Personalize sua frota e torne sua marca visível transmitindo profissionalismo.",
      cta: "Mobilize sua marca"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Sinalização",
      description: "Soluções completas de sinalização para ambientes comerciais, incluindo placas fotoluminescentes para segurança e orientação.",
      cta: "Sinalize com estilo"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Brindes",
      description: "Grande variedade de brindes personalizados para presentear clientes, celebrar datas ou premiar funcionários.",
      cta: "Surpreenda sempre"
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="fade-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas de comunicação visual para destacar sua marca no mundo físico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="fade-up card-hover bg-gradient-card border-border/50 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-heading font-semibold mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4 group-hover:opacity-80 transition-opacity duration-300">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={scrollToContact}
                  className="text-xs px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
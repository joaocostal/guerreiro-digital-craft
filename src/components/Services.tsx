import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Monitor, Megaphone, Smartphone } from "lucide-react";

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

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Branding & Identidade Visual",
      description: "Criação de marcas memoráveis que comunicam valores e conectam com o público-alvo de forma autêntica e impactante."
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Desenvolvimento de interfaces intuitivas e experiências digitais excepcionais que encantam usuários e geram conversões."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações responsivas com tecnologia moderna, focados em performance, usabilidade e resultados mensuráveis."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Marketing Digital",
      description: "Estratégias digitais integradas que amplificam sua presença online e aceleram o crescimento do seu negócio."
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
            Oferecemos soluções completas para elevar sua marca no ambiente digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="fade-up card-hover bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-heading font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
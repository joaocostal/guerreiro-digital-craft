import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
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

  const projects = [
    {
      title: "E-commerce Inovador",
      category: "Desenvolvimento Web",
      description: "Plataforma completa de vendas online com design moderno e experiência otimizada",
      tags: ["React", "UI/UX", "E-commerce"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Rebranding Corporativo",
      category: "Branding",
      description: "Renovação completa da identidade visual para empresa de tecnologia",
      tags: ["Identidade Visual", "Logo", "Branding"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "App Mobile Fitness",
      category: "UI/UX Design",
      description: "Interface intuitiva para aplicativo de exercícios e acompanhamento de saúde",
      tags: ["Mobile", "Fitness", "UX Research"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Campanha Digital",
      category: "Marketing Digital",
      description: "Estratégia multicanal que aumentou engajamento em 300%",
      tags: ["Social Media", "Ads", "Analytics"],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="fade-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="fade-up card-hover bg-gradient-card border-border/50 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-background/5"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/20 text-foreground border-0">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="fade-up text-muted-foreground">
            Quer ver mais projetos? Entre em contato conosco e conheça todo nosso portfólio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
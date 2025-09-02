import { useEffect, useRef } from "react";

const About = () => {
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

  return (
    <section id="sobre" ref={sectionRef} className="section-padding bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Sobre a <span className="text-primary">Guerreiro</span>
          </h2>
          
          <p className="fade-up text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Somos uma agência de comunicação visual apaixonada por transformar marcas através 
            do design estratégico e inovação digital.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="fade-up">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criar soluções visuais impactantes que conectam marcas aos seus públicos, 
                gerando resultados reais e experiências memoráveis no ambiente digital.
              </p>
            </div>

            <div className="fade-up">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em comunicação visual, reconhecida pela excelência 
                criativa e pela capacidade de impulsionar o sucesso dos nossos clientes.
              </p>
            </div>
          </div>

          <div className="fade-up mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+50</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+30</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
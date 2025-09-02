import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Creative workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-glow">
          A <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Guerreiro</span>{" "}
          cria experiências visuais marcantes
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-text">
          Somos especialistas em comunicação visual que transformam sua marca em referência. 
          Da fachada aos brindes, criamos identidade visual que conquista e impressiona.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-3"
          >
            Vamos conversar?
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-3"
          >
            Ver nosso trabalho
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
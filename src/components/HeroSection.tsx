import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-becaconecta.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Estudiantes peruanos estudiando" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                  🎓 Tu futuro educativo empieza aquí
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">
                  Conecta tu futuro
                </span>
                <br />
                <span className="text-foreground">
                  con la educación
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Orientamos y acompañamos a estudiantes de bajos recursos en la postulación 
                a la Beca 18 del PRONABEC y otras becas educativas del Estado Peruano.
              </p>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Tipos de Becas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:shadow-hero transition-all duration-300 text-lg px-8"
              >
                Comienza tu postulación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver cómo funciona
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Estudiantes peruanos preparándose para becas educativas" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card-gradient p-6 rounded-2xl shadow-card animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Proceso Simplificado</div>
                  <div className="text-sm text-muted-foreground">Guías paso a paso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-becaconecta.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Conecta tu futuro</span>
                <br />
                <span className="text-foreground">con la educación</span>
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

            <Button className="bg-hero-gradient text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              ¡Empieza YA con nosotros!
            </Button>

          </div>

          {/* Hero Image + Floating Cards */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Estudiantes peruanos preparándose para becas educativas"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
            </div>

            {/* Floating Cards */}
            {/* Card 1 */}
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

            {/* Card 2 */}
            <div className="absolute -top-6 right-10 bg-card-gradient p-6 rounded-2xl shadow-card animate-float-slow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Asesoría Personalizada</div>
                  <div className="text-sm text-muted-foreground">Mentores reales</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute top-1/3 -left-10 bg-card-gradient p-5 rounded-2xl shadow-card animate-float-fast">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">💡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Tips de Postulación</div>
                  <div className="text-sm text-muted-foreground">Actualizados</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="absolute bottom-10 right-0 bg-card-gradient p-5 rounded-2xl shadow-card animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/80 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Historias Reales</div>
                  <div className="text-sm text-muted-foreground">+500 Becarios</div>
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

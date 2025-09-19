import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const problems = [
    "Información dispersa sobre las becas",
    "Requisitos confusos y difíciles de entender",
    "Errores frecuentes en la carga de documentos",
    "Falta de orientación durante el proceso"
  ];

  const impacts = [
    {
      icon: Target,
      title: "Misión Clara",
      description: "Ayudar a más estudiantes a acceder a becas de manera clara y sencilla"
    },
    {
      icon: Heart,
      title: "Propósito Social",
      description: "Promover igualdad de oportunidades educativas para todos"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Crear una red de apoyo entre estudiantes y familias"
    },
    {
      icon: TrendingUp,
      title: "Impacto",
      description: "Incrementar la tasa de éxito en postulaciones a becas"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BecaConecta nace para resolver los principales obstáculos que enfrentan 
            los estudiantes peruanos al postular a becas educativas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Problem Statement */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                El Problema que Resolvemos
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card-gradient p-6 rounded-2xl shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">
                📊 Estadísticas Actuales:
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  • Solo el 30% de estudiantes elegibles postula a becas
                </p>
                <p className="text-muted-foreground">
                  • 45% de postulaciones tienen errores documentales
                </p>
                <p className="text-muted-foreground">
                  • 60% no conoce todas las becas disponibles
                </p>
              </div>
            </div>
          </div>

          {/* Solution Visual */}
          <div className="relative">
            <div className="bg-hero-gradient p-8 rounded-3xl text-center text-white shadow-hero">
              <h3 className="text-2xl font-bold mb-4">Nuestra Solución</h3>
              <p className="text-lg opacity-90 mb-6">
                Una plataforma integral que centraliza información, 
                simplifica procesos y acompaña a cada estudiante.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                <div className="text-3xl font-bold">+200%</div>
                <div className="text-sm opacity-90">Incremento esperado en postulaciones exitosas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <impact.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{impact.title}</h4>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
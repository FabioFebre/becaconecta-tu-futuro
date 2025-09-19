import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, ExternalLink, Users, FileText, Zap } from "lucide-react";

const CompetitionSection = () => {
  const competitors = [
    {
      name: "Páginas Oficiales PRONABEC",
      type: "Gobierno",
      strengths: ["Información oficial", "Actualizada"],
      weaknesses: ["Navegación compleja", "Información dispersa", "Sin herramientas de apoyo"],
      rating: 3,
      users: "Todos los postulantes",
      color: "bg-primary"
    },
    {
      name: "ONGs Educativas",
      type: "Organización",
      strengths: ["Apoyo personalizado", "Experiencia"],
      weaknesses: ["Alcance limitado", "Recursos limitados", "No escalable"],
      rating: 4,
      users: "Grupos específicos",
      color: "bg-secondary"
    },
    {
      name: "Foros y Grupos de Facebook",
      type: "Comunidad",
      strengths: ["Experiencias reales", "Comunidad activa"],
      weaknesses: ["Información no verificada", "Desorganizada", "Sin soporte técnico"],
      rating: 2,
      users: "Comunidades cerradas",
      color: "bg-accent"
    },
    {
      name: "Asesores Privados",
      type: "Servicio",
      strengths: ["Atención personalizada", "Experiencia"],
      weaknesses: ["Costoso", "Acceso limitado", "No escalable"],
      rating: 4,
      users: "Familias con recursos",
      color: "bg-primary"
    }
  ];

  const differentiators = [
    {
      icon: FileText,
      title: "Información Centralizada",
      description: "Toda la información sobre becas PRONABEC en un solo lugar, organizada y fácil de encontrar.",
      advantage: "vs información dispersa en múltiples sitios web"
    },
    {
      icon: Zap,
      title: "Herramientas Digitales",
      description: "Test de elegibilidad, validación de documentos y recordatorios automáticos.",
      advantage: "vs procesos manuales propensos a errores"
    },
    {
      icon: Users,
      title: "Acompañamiento Personalizado",
      description: "Chatbot 24/7 y guías paso a paso adaptadas a cada perfil de estudiante.",
      advantage: "vs navegación sin apoyo en sitios oficiales"
    },
    {
      icon: CheckCircle2,
      title: "Verificación de Calidad",
      description: "Información confiable, actualizada diariamente y verificada por expertos.",
      advantage: "vs información no verificada en foros"
    }
  ];

  const becaConectaFeatures = [
    "Información centralizada y actualizada",
    "Test de elegibilidad personalizado",
    "Guías paso a paso interactivas",
    "Chatbot disponible 24/7",
    "Validación automática de documentos",
    "Recordatorios inteligentes",
    "Totalmente gratuito",
    "Acceso desde cualquier dispositivo",
    "Soporte técnico especializado",
    "Base de datos actualizada diariamente"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              ¿Por qué elegir BecaConecta?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comparamos con las alternativas existentes para mostrarte por qué somos 
            la mejor opción para tu postulación a becas educativas.
          </p>
        </div>

        {/* Current Landscape */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Alternativas Actuales en el Mercado
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitors.map((competitor, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{competitor.type}</Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            i < competitor.rating ? 'bg-accent' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{competitor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{competitor.users}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 text-green-600">Fortalezas:</h4>
                    <ul className="space-y-1">
                      {competitor.strengths.map((strength, sIndex) => (
                        <li key={sIndex} className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 text-red-600">Debilidades:</h4>
                    <ul className="space-y-1">
                      {competitor.weaknesses.map((weakness, wIndex) => (
                        <li key={wIndex} className="flex items-start text-xs text-muted-foreground">
                          <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Differentiators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Lo que nos Diferencia
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <diff.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{diff.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {diff.description}
                      </p>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <p className="text-xs text-primary font-medium">
                          ✨ {diff.advantage}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* BecaConecta vs Competition */}
        <div className="bg-card-gradient rounded-3xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            BecaConecta: La Solución Integral
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Lo que obtienes con BecaConecta:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {becaConectaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-hero-gradient p-6 rounded-2xl text-white text-center">
                <h4 className="text-xl font-bold mb-4">Resultados Comprobados</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm opacity-90">Tasa de Éxito</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2.5k+</div>
                    <div className="text-sm opacity-90">Estudiantes</div>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  Vs. 45% de tasa de éxito promedio sin apoyo
                </p>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                100% Gratuito
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                24/7 Disponible
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Por qué conformarte con menos?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deja de navegar entre múltiples sitios web, grupos de Facebook desorganizados 
            o información desactualizada. Centraliza todo tu proceso en BecaConecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-hero-gradient text-white px-8 py-4 rounded-xl font-semibold hover:shadow-hero transition-all duration-300 cursor-pointer">
              Probar BecaConecta Gratis
            </div>
            <div className="flex items-center text-muted-foreground">
              <ExternalLink className="h-4 w-4 mr-2" />
              <span className="text-sm">Ver comparación detallada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Bell, MessageCircle, Shield, Calendar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Test de Elegibilidad",
      description: "Evalúa tu perfil académico y económico para identificar las becas que mejor se adapten a tu situación.",
      color: "bg-primary",
      benefits: ["Análisis personalizado", "Recomendaciones específicas", "Ahorro de tiempo"]
    },
    {
      icon: FileText,
      title: "Guías Paso a Paso",
      description: "Instrucciones detalladas y plantillas oficiales para completar tu postulación sin errores.",
      color: "bg-secondary",
      benefits: ["Plantillas oficiales", "Ejemplos prácticos", "Lista de verificación"]
    },
    {
      icon: Bell,
      title: "Recordatorios Inteligentes",
      description: "Nunca pierdas una fecha importante con nuestro sistema de alertas automáticas.",
      color: "bg-accent",
      benefits: ["Notificaciones personalizadas", "Calendario integrado", "Alertas por email"]
    },
    {
      icon: MessageCircle,
      title: "Chatbot 24/7",
      description: "Asistente virtual disponible las 24 horas para resolver tus dudas sobre las becas.",
      color: "bg-primary",
      benefits: ["Respuestas instantáneas", "Base de conocimiento", "Soporte continuo"]
    },
    {
      icon: Shield,
      title: "Validación Automática",
      description: "Verifica que tus documentos cumplan con todos los requisitos antes de enviar tu postulación.",
      color: "bg-secondary",
      benefits: ["Detección de errores", "Formato correcto", "Completitud de datos"]
    },
    {
      icon: Calendar,
      title: "Cronograma Personalizado",
      description: "Plan de acción personalizado con todas las actividades y fechas importantes de tu postulación.",
      color: "bg-accent",
      benefits: ["Planificación automática", "Seguimiento de progreso", "Gestión de tiempo"]
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Funcionalidades de BecaConecta
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Herramientas digitales diseñadas para simplificar tu proceso de postulación 
            y maximizar tus posibilidades de obtener una beca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Beneficios:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            ¿Cómo funciona BecaConecta?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Regístrate", desc: "Crea tu cuenta gratuita" },
              { step: "02", title: "Evalúa", desc: "Completa el test de elegibilidad" },
              { step: "03", title: "Prepara", desc: "Sigue las guías paso a paso" },
              { step: "04", title: "Postula", desc: "Envía tu solicitud con confianza" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="h-0.5 bg-primary/30 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
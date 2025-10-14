import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Bell, MessageCircle, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <span className="text-gradient">
              Funcionalidades de BecaConecta
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Herramientas digitales diseñadas para simplificar tu proceso de postulación 
            y maximizar tus posibilidades de obtener una beca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-4 md:mx-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              tabIndex={0}
              className="
                group relative border border-transparent shadow-md hover:shadow-xl
                transition-all duration-300 rounded-xl overflow-hidden
                bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800

                before:absolute before:inset-0
                before:bg-black/0
                before:opacity-0
                before:transition-all before:duration-300
                hover:before:bg-black/20 hover:before:opacity-100
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >


              <CardHeader className="px-5 pt-4 pb-3 text-center">
                <div
                  className={`mx-auto w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-primary/90 to-primary text-white shadow-sm`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              {/* Relative container para poder posicionar el listado en absolute */}
              <CardContent className="relative space-y-4 px-5 pb-5 text-center">
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>

                {/* LISTADO: inicialmente invisible y fuera de interacción; al hover/focus aparece */}
                <ul
                  className="
                    absolute left-1/2 -translate-x-1/2 bottom-5 
                    w-[90%] max-w-xs
                    opacity-0 translate-y-3 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                    transition-all duration-300
                  "
                  aria-hidden="true"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-3 py-2 rounded-2xl shadow-md flex flex-col items-center space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center justify-center gap-2 text-sm text-foreground bg-white/60 dark:bg-gray-800/50 px-4 py-2 rounded-full hover:shadow-sm transition-all duration-300 w-full"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </div>
                </ul>
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

          

            <div className="flex justify-center mt-20">
              <Button className="bg-hero-gradient text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                ¡Empieza YA con nosotros!
              </Button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
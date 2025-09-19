import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, FileCheck, Info } from "lucide-react";

const BeneficiariesSection = () => {
  const beneficiaries = [
    {
      icon: GraduationCap,
      title: "Estudiantes de Secundaria",
      subtitle: "En etapa final",
      description: "Estudiantes de 4to y 5to año de secundaria que planean continuar estudios superiores.",
      characteristics: [
        "Alto rendimiento académico",
        "Recursos económicos limitados", 
        "Motivación por estudiar",
        "Residencia en zonas priorizadas"
      ],
      color: "bg-primary",
      percentage: "45%"
    },
    {
      icon: Users,
      title: "Jóvenes Egresados",
      subtitle: "De colegios públicos y privados",
      description: "Egresados recientes que buscan acceder a educación superior de calidad.",
      characteristics: [
        "Egresados de colegios",
        "Edad límite según beca",
        "Documentos académicos completos",
        "Situación socioeconómica verificable"
      ],
      color: "bg-secondary", 
      percentage: "35%"
    },
    {
      icon: FileCheck,
      title: "Estudiantes Becarios",
      subtitle: "Que necesitan apoyo documental",
      description: "Becarios actuales que requieren asistencia en gestión de documentos y trámites.",
      characteristics: [
        "Becarios PRONABEC activos",
        "Necesidad de renovación",
        "Gestión de documentos",
        "Seguimiento académico"
      ],
      color: "bg-accent",
      percentage: "15%"
    },
    {
      icon: Info,
      title: "Padres de Familia",
      subtitle: "Que buscan orientación",
      description: "Padres y tutores que desean información clara sobre oportunidades educativas para sus hijos.",
      characteristics: [
        "Hijos en edad escolar",
        "Interés en becas educativas",
        "Necesidad de orientación",
        "Apoyo en el proceso"
      ],
      color: "bg-primary",
      percentage: "5%"
    }
  ];

  const requirements = [
    {
      category: "Académicos",
      items: [
        "Promedio mínimo según beca",
        "Certificados de estudios",
        "Constancia de matrícula",
        "Ranking estudiantil"
      ]
    },
    {
      category: "Económicos", 
      items: [
        "Clasificación socioeconómica",
        "Declaración jurada de ingresos",
        "Recibos de servicios básicos",
        "Documentos familiares"
      ]
    },
    {
      category: "Personales",
      items: [
        "DNI vigente",
        "Partida de nacimiento",
        "Ficha RENIEC",
        "Fotografías actuales"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              ¿Quiénes se Benefician?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BecaConecta está diseñado para diferentes perfiles de usuarios que buscan 
            acceder a oportunidades educativas en el Perú.
          </p>
        </div>

        {/* Beneficiaries Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficiaries.map((beneficiary, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                <span className="text-sm font-semibold text-foreground">{beneficiary.percentage}</span>
              </div>
              
              <CardHeader className="pb-3">
                <div className={`w-16 h-16 ${beneficiary.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <beneficiary.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {beneficiary.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">{beneficiary.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {beneficiary.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {beneficiary.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="flex items-start text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-card-gradient rounded-3xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Requisitos Generales para Becas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{req.category[0]}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-4">{req.category}</h4>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 p-6 bg-primary/5 rounded-2xl">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Nota importante:</strong> Los requisitos específicos pueden variar según el tipo de beca. 
              Utiliza nuestro test de elegibilidad para conocer los requisitos exactos de la beca que te interesa.
            </p>
            <div className="mt-4">
              <div className="bg-hero-gradient text-white px-6 py-3 rounded-xl inline-block font-semibold hover:shadow-soft transition-all duration-300 cursor-pointer">
                Verificar mi Elegibilidad
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Resultados por Perfil de Usuario
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { profile: "Estudiantes Secundaria", success: "78%", applications: "1,200+" },
              { profile: "Jóvenes Egresados", success: "82%", applications: "950+" },
              { profile: "Becarios Actuales", success: "95%", applications: "300+" },
              { profile: "Con Apoyo Familiar", success: "88%", applications: "2,100+" }
            ].map((metric, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-muted/50">
                <div className="text-2xl font-bold text-primary mb-1">{metric.success}</div>
                <div className="text-sm text-muted-foreground mb-2">Tasa de Éxito</div>
                <div className="text-xs text-muted-foreground">{metric.applications} postulaciones</div>
                <div className="text-xs font-medium text-foreground mt-1">{metric.profile}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
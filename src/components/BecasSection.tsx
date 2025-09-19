import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Trophy, Zap, BookOpen, Heart, Accessibility, Clock } from "lucide-react";

const BecasSection = () => {
  const becas = [
    {
      id: 1,
      name: "Beca 18",
      icon: GraduationCap,
      description: "La beca más conocida del PRONABEC, dirigida a estudiantes con alto rendimiento académico y recursos económicos limitados.",
      modalidades: ["Pregrado", "CNA", "VRAEM"],
      color: "bg-primary",
      badge: "Más Popular"
    },
    {
      id: 2, 
      name: "Beca Generación del Bicentenario",
      icon: Award,
      description: "Beca presidencial para estudiantes con excelencia académica que deseen estudiar en universidades de alta calidad.",
      modalidades: ["Pregrado Nacional", "Internacional"],
      color: "bg-secondary",
      badge: "Presidencial"
    },
    {
      id: 3,
      name: "Beca Perú",
      icon: Trophy,
      description: "Dirigida a profesionales peruanos para estudios de posgrado en universidades de prestigio internacional.",
      modalidades: ["Maestría", "Doctorado"],
      color: "bg-accent",
      badge: "Internacional"
    },
    {
      id: 4,
      name: "Beca Excelencia Académica",
      icon: BookOpen,
      description: "Para hijos de docentes y auxiliares de educación del sector público que demuestren excelencia académica.",
      modalidades: ["Pregrado", "Posgrado"],
      color: "bg-primary",
      badge: "Docentes"
    },
    {
      id: 5,
      name: "Beca Deporte Escolar",
      icon: Trophy,
      description: "Reconoce el talento deportivo estudiantil a nivel escolar y promueve la práctica deportiva.",
      modalidades: ["Escolar"],
      color: "bg-secondary",
      badge: "Deportivo"
    },
    {
      id: 6,
      name: "Beca Talento Escolar",
      icon: Zap,
      description: "Para estudiantes con talento excepcional en diversas áreas del conocimiento.",
      modalidades: ["Escolar"],
      color: "bg-primary",
      badge: "Talento"
    },
    {
      id: 7,
      name: "Beca Mujeres en Ciencia",
      icon: Users,
      description: "Promueve la participación de mujeres en carreras STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).",
      modalidades: ["Pregrado", "Posgrado"],
      color: "bg-secondary",
      badge: "STEM"
    },
    {
      id: 8,
      name: "Beca Inclusión",
      icon: Accessibility,
      description: "Dirigida a personas con discapacidad para garantizar su acceso a la educación superior.",
      modalidades: ["Pregrado", "Técnica"],
      color: "bg-primary",
      badge: "Inclusiva"
    },
    {
      id: 9,
      name: "Beca Continuidad de Estudios",
      icon: Clock,
      description: "Para estudiantes que requieren apoyo para continuar sus estudios universitarios.",
      modalidades: ["Continuidad"],
      color: "bg-accent",
      badge: "Continuidad"
    }
  ];

  return (
    <section id="becas" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Tipos de Becas PRONABEC
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce todas las oportunidades educativas que ofrece el Estado Peruano. 
            Cada beca tiene requisitos específicos y está diseñada para diferentes perfiles estudiantiles.
          </p>
        </div>

        {/* Featured Beca 18 */}
        <div className="mb-12">
          <Card className="border-2 border-primary shadow-hero hover:shadow-soft transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-primary">Beca 18</CardTitle>
                  <Badge variant="secondary" className="mt-1">Más Popular</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                La beca más conocida del PRONABEC, dirigida a estudiantes con alto rendimiento académico 
                y recursos económicos limitados. Cubre estudios de pregrado completos.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Pregrado", "CNA", "VRAEM"].map((modalidad) => (
                  <Badge key={modalidad} variant="outline">{modalidad}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Becas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {becas.slice(1).map((beca, index) => (
            <Card 
              key={beca.id} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 ${beca.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <beca.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{beca.badge}</Badge>
                </div>
                <CardTitle className="text-lg text-foreground leading-tight">
                  {beca.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {beca.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {beca.modalidades.map((modalidad) => (
                    <Badge key={modalidad} variant="outline" className="text-xs">
                      {modalidad}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient p-8 rounded-3xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No sabes cuál beca es para ti?
            </h3>
            <p className="text-muted-foreground mb-6">
              Usa nuestro test de elegibilidad para descubrir qué becas se adaptan 
              mejor a tu perfil académico y situación económica.
            </p>
            <div className="bg-hero-gradient text-white px-6 py-3 rounded-xl inline-block font-semibold hover:shadow-soft transition-all duration-300 cursor-pointer">
              Hacer Test de Elegibilidad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecasSection;

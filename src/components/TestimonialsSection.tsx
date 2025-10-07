import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialsImage from "@/assets/testimonios-success.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Lima, Perú",
      beca: "Beca 18 - Pregrado",
      quote: "BecaConecta me ayudó a entender todos los requisitos de la Beca 18. Sin su guía paso a paso, nunca habría completado mi postulación correctamente.",
      career: "Ingeniería de Sistemas",
      university: "Universidad Nacional Mayor de San Marcos",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Carlos Mendoza",
      location: "Arequipa, Perú",
      beca: "Beca Generación del Bicentenario",
      quote: "El test de elegibilidad me mostró que calificaba para una beca que ni sabía que existía. Ahora estudio mi carrera soñada gracias a BecaConecta.",
      career: "Medicina",
      university: "Universidad Nacional de San Agustín",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      name: "Ana Quispe",
      location: "Cusco, Perú",
      beca: "Beca Mujeres en Ciencia",
      quote: "Como mujer interesada en STEM, BecaConecta me orientó hacia la beca perfecta. Su chatbot resolvió todas mis dudas a cualquier hora.",
      career: "Ingeniería Química",
      university: "Universidad Nacional de Ingeniería",
      rating: 5,
      image: "👩‍🔬"
    },
    {
      name: "Luis Herrera",
      location: "Trujillo, Perú",
      beca: "Beca Perú - Maestría",
      quote: "BecaConecta no solo me ayudó con la postulación, sino que me preparó para estudiar en el extranjero. Su apoyo fue fundamental.",
      career: "Maestría en Administración",
      university: "Universidad del Pacífico",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Estudiantes Orientados", color: "text-primary" },
    { number: "85%", label: "Tasa de Éxito", color: "text-secondary" },
    { number: "9", label: "Tipos de Becas", color: "text-accent" },
    { number: "24/7", label: "Soporte Disponible", color: "text-primary" }
  ];

  return (
    <section id="testimonios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Historias de Éxito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce las experiencias de estudiantes que lograron acceder a becas educativas 
            con el apoyo de BecaConecta.
          </p>
        </div>

        {/* Hero Testimonial */}
        <div className="mb-16">
          <Card className="border-0 shadow-hero overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={testimonialsImage} 
                  alt="Estudiantes celebrando éxito académico" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-primary mb-6" />
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "BecaConecta cambió mi vida. Me ayudó a navegar el complejo proceso de postulación 
                  y ahora estoy estudiando la carrera de mis sueños."
                </blockquote>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">María González</div>
                  <div className="text-muted-foreground">Beca 18 - Ingeniería de Sistemas</div>
                  <div className="text-sm text-muted-foreground">UNMSM, Lima</div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-primary mb-1">{testimonial.beca}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.career}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.university}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-card-gradient rounded-3xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Nuestro Impacto en Números
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
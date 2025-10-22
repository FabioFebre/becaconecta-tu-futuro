"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import testimonialsImage from "@/assets/testimonios-success.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
 const testimonials = [
  {
    name: "Sebastián Vílchez Gamboa",
    location: "Trujillo, Perú",
    beca: "Cofundador de BecaConecta",
    quote:
      "BecaConecta nació como un proyecto entre amigos trujillanos con el deseo de guiar a otros jóvenes hacia las becas y oportunidades que nosotros mismos buscamos. Queremos demostrar que desde TECSUP también se puede inspirar a todo el país.",
    career: "Desarrollo de Software",
    university: "TECSUP",
    rating: 5,
    image: "👨‍💻",
  },
  {
    name: "Eloy Sánchez Ruiz",
    location: "Trujillo, Perú",
    beca: "Cofundador y Coordinador de Contenido",
    quote:
      "Nuestra visión fue crear una plataforma hecha por estudiantes y para estudiantes. Desde Trujillo, formamos un equipo que une la tecnología y la educación para brindar oportunidades a miles de jóvenes.",
    career: "Diseño y Desarrollo de Software",
    university: "TECSUP",
    rating: 5,
    image: "👨‍🎓",
  },
  {
    name: "Fabio Febre Vargas",
    location: "Trujillo, Perú",
    beca: "Cofundador y Desarrollador Frontend",
    quote:
      "Desde TECSUP y nuestra ciudad de Trujillo, impulsamos BecaConecta con la meta de hacer más accesible la información sobre becas. Cada línea de código fue pensada para apoyar a quien sueña con estudiar más allá de los límites.",
    career: "Ingeniería de Software",
    university: "TECSUP",
    rating: 5,
    image: "💻",
  },
];


  const stats = [
    { number: "2,500+", label: "Estudiantes Orientados", color: "text-primary" },
    { number: "85%", label: "Tasa de Éxito", color: "text-secondary" },
    { number: "9", label: "Tipos de Becas", color: "text-accent" },
    { number: "24/7", label: "Soporte Disponible", color: "text-primary" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient">
            Fundadores de BecaConecta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conoce a los jóvenes  detrás de{" "}
            <span className="font-semibold text-primary">BecaConecta</span>, un proyecto
            creado por estudiantes de <span className="font-semibold">TECSUP</span> con la
            misión de conectar a más jóvenes con oportunidades de becas y educación de calidad.
          </p>
        </motion.div>


        {/* Carrusel principal */}
        <div className="relative mb-20">
          <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={testimonialsImage}
                  alt="Estudiantes celebrando éxito académico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
              <CardContent className="p-10 flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    <blockquote className="text-lg md:text-xl font-medium text-foreground mb-6 leading-relaxed italic">
                      "{testimonials[index].quote}"
                    </blockquote>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">
                        {testimonials[index].name}
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonials[index].beca}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[index].university}, {testimonials[index].location}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Botones de navegación */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Estadísticas */}
        <motion.div
          className="bg-card-gradient rounded-3xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            Nuestro Impacto en Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
              <Button className="bg-hero-gradient text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                ¡Empieza YA con nosotros!
              </Button>
            </div>
        </motion.div>
      </div>

            

    </section>
  );
};

export default TestimonialsSection;

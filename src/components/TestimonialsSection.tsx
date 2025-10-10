"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import testimonialsImage from "@/assets/testimonios-success.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Lima, Perú",
      beca: "Beca 18 - Pregrado",
      quote:
        "BecaConecta me ayudó a entender todos los requisitos de la Beca 18. Sin su guía paso a paso, nunca habría completado mi postulación correctamente.",
      career: "Ingeniería de Sistemas",
      university: "Universidad Nacional Mayor de San Marcos",
      rating: 5,
      image: "👩‍🎓",
    },
    {
      name: "Carlos Mendoza",
      location: "Arequipa, Perú",
      beca: "Beca Generación del Bicentenario",
      quote:
        "El test de elegibilidad me mostró que calificaba para una beca que ni sabía que existía. Ahora estudio mi carrera soñada gracias a BecaConecta.",
      career: "Medicina",
      university: "Universidad Nacional de San Agustín",
      rating: 5,
      image: "👨‍⚕️",
    },
    {
      name: "Ana Quispe",
      location: "Cusco, Perú",
      beca: "Beca Mujeres en Ciencia",
      quote:
        "Como mujer interesada en STEM, BecaConecta me orientó hacia la beca perfecta. Su chatbot resolvió todas mis dudas a cualquier hora.",
      career: "Ingeniería Química",
      university: "Universidad Nacional de Ingeniería",
      rating: 5,
      image: "👩‍🔬",
    },
    {
      name: "Luis Herrera",
      location: "Trujillo, Perú",
      beca: "Beca Perú - Maestría",
      quote:
        "BecaConecta no solo me ayudó con la postulación, sino que me preparó para estudiar en el extranjero. Su apoyo fue fundamental.",
      career: "Maestría en Administración",
      university: "Universidad del Pacífico",
      rating: 5,
      image: "👨‍💼",
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
            Historias de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conoce las experiencias de estudiantes que lograron acceder a becas educativas con el apoyo de{" "}
            <span className="font-semibold text-primary">BecaConecta</span>.
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
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

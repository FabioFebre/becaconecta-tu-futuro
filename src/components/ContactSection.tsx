"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { supabase } from "@/lib/supabaseClient";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consultationType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim() ||
      !formData.consultationType.trim()
    ) {
      toast({
        title: "Campos obligatorios faltantes",
        description: "Por favor, completa todos los campos marcados con *.",
        variant: "destructive"
      });
      return;
    }

    // Validación de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Correo inválido",
        description: "Por favor, ingresa un correo electrónico válido.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Inserción en Supabase
      const { error } = await supabase.from("contactos").insert([
        {
          nombre: formData.name,
          correo: formData.email,
          telefono: formData.phone,
          tipo_consulta: formData.consultationType,
          asunto: formData.subject,
          mensaje: formData.message
        }
      ]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Tu mensaje fue registrado correctamente en Supabase.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consultationType: ""
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error al enviar",
        description: "No se pudo guardar el mensaje en Supabase.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "febrevargasf@gmail.com",
      subtitle: "Respuesta en 24 horas",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+51 916 767 550",
      subtitle: "Lun - Vie: 8:00 AM - 6:00 PM",
      color: "bg-secondary"
    }
  ];

  const consultationTypes = [
    "Consulta sobre elegibilidad",
    "Ayuda con documentos",
    "Información sobre becas específicas",
    "Problemas técnicos",
    "Sugerencias de mejora",
    "Otro"
  ];

  const faqs = [
    {
      question: "¿BecaConecta es gratuito?",
      answer:
        "BecaConecta ofrece asesoramiento personalizado sobre becas y oportunidades educativas. Contamos con recursos gratuitos, pero algunos servicios especializados pueden tener un costo según el tipo de orientación que necesites."
    },
    {
      question: "¿Qué tan actualizada está la información?",
      answer:
        "Actualizamos diariamente nuestra base de datos con información oficial del PRONABEC y otras instituciones."
    },
    {
      question: "¿Puedo usar BecaConecta desde cualquier dispositivo?",
      answer:
        "Sí, nuestra plataforma es completamente responsive y funciona en computadoras, tablets y móviles."
    },
    {
      question: "¿Ofrecen soporte personalizado?",
      answer:
        "Sí, además del chatbot 24/7, ofrecemos consultas personalizadas por correo y teléfono."
    }
  ];

  return (
    <section id="contacto" className="p-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes dudas sobre las becas o necesitas ayuda con tu postulación? 
            Estamos aquí para apoyarte en cada paso del camino.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados</span>
                    <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergencias */}
            <div className="bg-card-gradient p-6 rounded-2xl shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">
                🚨 Soporte de Emergencia
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Para consultas urgentes durante periodos de postulación:
              </p>
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  WhatsApp: +51 916 767 550
                </p>
                <p className="text-xs text-muted-foreground">
                  Solo emergencias académicas
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Envíanos un Mensaje
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te responderemos lo antes posible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Nombre Completo *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Correo Electrónico *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu.email@ejemplo.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Teléfono
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+51 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Tipo de Consulta *
                      </label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) =>
                          handleInputChange("consultationType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          {consultationTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Asunto *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Resumen breve de tu consulta"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Mensaje *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe tu consulta o problema en detalle..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hero-gradient hover:shadow-soft transition-all duration-300"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 mb-12">
            Preguntas Frecuentes
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <article
                key={i}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute left-0 top-6 bottom-6 w-1.5 rounded-r-2xl bg-gradient-to-b from-primary to-primary/60 pointer-events-none" />
                <div className="absolute right-4 top-4 opacity-10 transform rotate-6">
                  <InformationCircleIcon className="w-14 h-14 text-primary" />
                </div>
                <header className="pr-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
                    {faq.answer}
                  </p>
                </header>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Última actualización • 2025
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-primary/70" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;

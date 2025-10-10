import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos dentro de las próximas 24 horas.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consultationType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "info@becaconecta.com",
      subtitle: "Respuesta en 24 horas",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+51 1 234 5678",
      subtitle: "Lun - Vie: 8:00 AM - 6:00 PM",
      color: "bg-secondary"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Lima, Perú",
      subtitle: "Oficina principal",
      color: "bg-accent"
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      value: "Disponible 24/7",
      subtitle: "Chatbot inteligente",
      color: "bg-primary"
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
      answer: "Sí, completamente gratuito. Nuestro objetivo es democratizar el acceso a la información sobre becas."
    },
    {
      question: "¿Qué tan actualizada está la información?",
      answer: "Actualizamos diariamente nuestra base de datos con información oficial del PRONABEC y otras instituciones."
    },
    {
      question: "¿Puedo usar BecaConecta desde cualquier dispositivo?",
      answer: "Sí, nuestra plataforma es completamente responsive y funciona en computadoras, tablets y móviles."
    },
    {
      question: "¿Ofrecen soporte personalizado?",
      answer: "Sí, además del chatbot 24/7, ofrecemos consultas personalizadas por correo y teléfono."
    }
  ];

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes dudas sobre las becas o necesitas ayuda con tu postulación? 
            Estamos aquí para apoyarte en cada paso del camino.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
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
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingos</span>
                    <span className="font-medium text-foreground">Chatbot disponible</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-card-gradient p-6 rounded-2xl shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">
                🚨 Soporte de Emergencia
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Para consultas urgentes durante periodos de postulación:
              </p>
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-sm font-medium text-primary">WhatsApp: +51 987 654 321</p>
                <p className="text-xs text-muted-foreground">Solo emergencias académicas</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envíanos un Mensaje</CardTitle>
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
                        onChange={(e) => handleInputChange('name', e.target.value)}
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
                        onChange={(e) => handleInputChange('email', e.target.value)}
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
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+51 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Tipo de Consulta *
                      </label>
                      <Select 
                        value={formData.consultationType} 
                        onValueChange={(value) => handleInputChange('consultationType', value)}
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
                      onChange={(e) => handleInputChange('subject', e.target.value)}
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
                      onChange={(e) => handleInputChange('message', e.target.value)}
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

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Preguntas Frecuentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ContactSection;
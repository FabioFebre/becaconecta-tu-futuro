import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import becaConectaLogo from "@/assets/becaconecta-logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Becas", href: "#becas" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" }
  ];

  const becasLinks = [
    "Beca 18",
    "Beca Generación del Bicentenario", 
    "Beca Perú",
    "Beca Excelencia Académica",
    "Beca Mujeres en Ciencia",
    "Todas las Becas"
  ];

  const recursos = [
    "Test de Elegibilidad",
    "Guías de Postulación",
    "Plantillas de Documentos",
    "Calendario de Becas",
    "Preguntas Frecuentes",
    "Blog Educativo"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter */}
      <div className="bg-hero-gradient text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¡Mantente Informado!
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Recibe las últimas noticias sobre becas, fechas importantes y consejos 
            para mejorar tu postulación directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ingresa tu correo electrónico" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={becaConectaLogo} 
                alt="BecaConecta Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-gradient">
                BecaConecta
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Conectamos el talento peruano con las mejores oportunidades educativas. 
              Nuestra misión es democratizar el acceso a la educación superior a través 
              de tecnología e información clara.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Contáctanos:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@becaconecta.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+51 1 234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Síguenos:</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark cursor-pointer transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark cursor-pointer transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark cursor-pointer transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark cursor-pointer transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Becas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Becas PRONABEC</h4>
            <ul className="space-y-3">
              {becasLinks.map((beca) => (
                <li key={beca}>
                  <a 
                    href="#becas" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {beca}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {recursos.map((recurso) => (
                <li key={recurso}>
                  <a 
                    href="#funcionalidades" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {recurso}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 BecaConecta. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>

            <div className="flex items-center text-muted-foreground text-sm">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> para el Perú
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
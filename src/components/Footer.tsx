import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import becaConectaLogo from "@/assets/becaconecta-logo.ico";

const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Becas", href: "#becas" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const becasLinks = [
    { label: "Beca 18", url: "https://www.pronabec.gob.pe/beca-18/" },
    { label: "Beca Generación del Bicentenario", url: "https://www.pronabec.gob.pe/beca-generacion-bicentenario/" },
    { label: "Beca Perú", url: "https://www.pronabec.gob.pe/beca-peru/" },
    { label: "Beca Excelencia Académica", url: "https://www.pronabec.gob.pe/beca-excelencia-academica/" },
    { label: "Beca Mujeres en Ciencia", url: "https://www.pronabec.gob.pe/beca-mujeres-en-ciencia/" },
    { label: "Todas las Becas", url: "https://www.pronabec.gob.pe/becas/" },
  ];

  const recursos = [
    { label: "Test de Elegibilidad", url: "#test-elegibilidad" },
    { label: "Guías de Postulación", url: "https://www.pronabec.gob.pe/guia-de-postulacion/" },
    { label: "Plantillas de Documentos", url: "https://www.pronabec.gob.pe/documentos-requeridos/" },
    { label: "Calendario de Becas", url: "https://www.pronabec.gob.pe/calendario-becas/" },
    { label: "Preguntas Frecuentes", url: "https://www.pronabec.gob.pe/preguntas-frecuentes/" },
    { label: "Blog Educativo", url: "https://blog.pronabec.gob.pe/" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={becaConectaLogo} alt="BecaConecta Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gradient">BecaConecta</span>
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
                  <span>febrevargasf@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+51 916 767 550</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Trujillo, Perú</span>
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
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
                <li key={beca.label}>
                  <a
                    href={beca.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {beca.label}
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
                <li key={recurso.label}>
                  <a
                    href={recurso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {recurso.label}
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

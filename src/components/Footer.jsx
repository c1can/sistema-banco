import { Shield, Clock, MapPin } from 'lucide-react';

export function Footer() { 
  return (
    <footer className="w-full py-6  text-white/80 bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-gold-400" />
            <p className="text-sm">Protección y seguridad garantizada</p>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-gold-400" />
            <p className="text-sm">Atención 24/7</p>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-gold-400" />
            <p className="text-sm">Sucursales en todo el país</p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white/60">
          <p>© 2025 Sistema de Banco S.A. - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

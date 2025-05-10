import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6  bg-blue-950 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Building2 className="mr-3 h-8 w-8 text-gold-400" />
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Sistema de Banco S.A.
        </h1>
      </div>
    </header>
  );
};

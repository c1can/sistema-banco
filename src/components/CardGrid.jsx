import { NavigationCard } from './NavigationCard';
import { 
  UserPlus, 
  BarChart3, 
  PiggyBank, 
  HelpCircle 
} from 'lucide-react';

export function CardGrid() {
  const cardData = [
    {
      title: "Apertura de cuentas",
      description: "Crea cuentas personales, empresariales o de ahorro con nosotros.",
      icon: <UserPlus size={24} />,
      accentColor: "bg-green-600",
      path: "/apertura-cuenta"
    },
    {
      title: "Operaciones",
      description: "Gestiona transferencias, pagos y otras operaciones bancarias.",
      icon: <BarChart3 size={24} />,
      accentColor: "bg-teal-600",
      path: "/operaciones"
    },
    {
      title: "Prestamos",
      description: "Solicita préstamos personales, hipotecarios o empresariales.",
      icon: <PiggyBank size={24} />,
      accentColor: "bg-yellow-600",
      path: "/prestamos"
    },
    {
      title: "Consultas",
      description: "Revisa tus saldos, movimientos y resuelve tus dudas.",
      icon: <HelpCircle size={24} />,
      accentColor: "bg-blue-950",
      path: "/consultas"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="transform transition-all duration-300" 
               style={{ animationDelay: `${index * 100}ms` }}>
            <NavigationCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              accentColor={card.accentColor}
              path={card.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

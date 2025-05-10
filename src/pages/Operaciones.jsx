import { Header} from '../components/Header';
import { Footer} from '../components/Footer';
import { ArrowLeft, Send } from 'lucide-react';
import { useLocation } from 'wouter';
import { useState } from 'react';

export function Operaciones()  {
  const [location, navigate] = useLocation();
  const [formData, setFormData] = useState({
    accountNumber: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la transferencia
    console.log('Datos de la transferencia:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </button>
        
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary-800 mb-6">
            Realizar Transferencia
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="accountNumber">
                  Número de Cuenta Destino
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Ej: 1234-5678-9012-3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="amount">
                  Monto a Transferir
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
                  Descripción (Opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Añade un mensaje o referencia"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 h-24 resize-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Realizar Transferencia
              </button>
            </div>
          </form>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Información Importante
            </h3>
            <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
              <li>Las transferencias son procesadas inmediatamente</li>
              <li>Verifique el número de cuenta antes de enviar</li>
              <li>El límite máximo por transferencia es $10,000</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, Calculator, PiggyBank } from 'lucide-react';
import { useLocation } from 'wouter';

export function Prestamos (){
  const [location, navigate] = useLocation();
  const [formData, setFormData] = useState({
    tipoCredito: 'personal',
    monto: '',
    plazo: '12',
    ingresoMensual: '',
    empleador: '',
    antiguedadLaboral: '',
    propositoPrestamo: ''
  });

  const [cuotaEstimada, setCuotaEstimada] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calcular cuota estimada cuando cambia el monto o plazo
    if (name === 'monto' || name === 'plazo') {
      const monto = parseFloat(name === 'monto' ? value : formData.monto) || 0;
      const plazo = parseInt(name === 'plazo' ? value : formData.plazo) || 12;
      const tasaAnual = 0.12; // 12% anual
      const tasaMensual = tasaAnual / 12;
      
      if (monto > 0 && plazo > 0) {
        const cuota = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazo)) / 
                     (Math.pow(1 + tasaMensual, plazo) - 1);
        setCuotaEstimada(cuota);
      } else {
        setCuotaEstimada(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la solicitud de préstamo
    console.log('Datos de la solicitud:', formData);
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
        
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <PiggyBank className="h-8 w-8 text-primary-600" />
            <h2 className="text-3xl font-semibold text-primary-800">
              Solicitud de Préstamo
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="tipoCredito">
                  Tipo de Crédito
                </label>
                <select
                  id="tipoCredito"
                  name="tipoCredito"
                  value={formData.tipoCredito}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="personal">Préstamo Personal</option>
                  <option value="hipotecario">Préstamo Hipotecario</option>
                  <option value="vehiculo">Préstamo Vehicular</option>
                  <option value="negocio">Préstamo para Negocio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="monto">
                  Monto Solicitado
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="monto"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="1000"
                    step="100"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="plazo">
                  Plazo (meses)
                </label>
                <select
                  id="plazo"
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="12">12 meses</option>
                  <option value="24">24 meses</option>
                  <option value="36">36 meses</option>
                  <option value="48">48 meses</option>
                  <option value="60">60 meses</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="ingresoMensual">
                  Ingreso Mensual
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="ingresoMensual"
                    name="ingresoMensual"
                    value={formData.ingresoMensual}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="100"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="empleador">
                  Empleador Actual
                </label>
                <input
                  type="text"
                  id="empleador"
                  name="empleador"
                  value={formData.empleador}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="antiguedadLaboral">
                  Antigüedad Laboral (años)
                </label>
                <input
                  type="number"
                  id="antiguedadLaboral"
                  name="antiguedadLaboral"
                  value={formData.antiguedadLaboral}
                  onChange={handleChange}
                  min="0"
                  step="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="propositoPrestamo">
                  Propósito del Préstamo
                </label>
                <textarea
                  id="propositoPrestamo"
                  name="propositoPrestamo"
                  value={formData.propositoPrestamo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  required
                />
              </div>
            </div>

            {cuotaEstimada && (
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <div className="flex items-center gap-2 text-primary-800">
                  <Calculator className="h-5 w-5" />
                  <h3 className="font-medium">Cuota Mensual Estimada</h3>
                </div>
                <p className="mt-2 text-2xl font-bold text-primary-900">
                  ${cuotaEstimada.toFixed(2)}
                </p>
                <p className="text-sm text-primary-600 mt-1">
                  *Esta es una estimación basada en una tasa anual del 12%. La tasa final puede variar según evaluación.
                </p>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <PiggyBank className="h-5 w-5 mr-2" />
                Enviar Solicitud
              </button>
            </div>
          </form>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Información Importante
            </h3>
            <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
              <li>La aprobación está sujeta a evaluación crediticia</li>
              <li>Se requiere presentar documentación adicional</li>
              <li>El tiempo de respuesta es de 24-48 horas hábiles</li>
              <li>La tasa final puede variar según el perfil crediticio</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

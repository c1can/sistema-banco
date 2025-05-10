import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardGrid } from '../components/CardGrid';

export function Bank() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-primary-800 mb-2">
            Bienvenido a su Banca Digital
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seleccione una de nuestras opciones para comenzar a gestionar sus finanzas 
            de manera segura y eficiente.
          </p>
        </div>
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}

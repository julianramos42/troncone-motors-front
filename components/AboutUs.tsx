import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Por Qué Elegir Troncone{" "}
              <span className="text-amber-500">Motors</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Con más de 15 años en el mercado automotriz, nos hemos consolidado
              como la concesionaria de confianza para miles de familias. Nuestra
              misión es hacer que la compra de tu próximo vehículo sea una
              experiencia excepcional.
            </p>

            <div className="space-y-4">
              {[
                "Inspección rigurosa de 150 puntos en cada vehículo",
                "Garantía en todos nuestros autos usados",
                "Financiamiento aprobado en 24 horas",
                "Servicio post-venta de calidad",
                "Precios justos y transparentes",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#CE987E] rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link href={"/"} className="inline-block mt-8">
              <Button className="bg-[#363435] hover:bg-[#2a2829]">
                Conoce Más Sobre Nosotros
              </Button>
            </Link>
          </div>

          <div className="hidden relative lg:flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Nuestro equipo"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

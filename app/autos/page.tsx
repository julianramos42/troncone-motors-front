"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Car,
  Fuel,
  Calendar,
  Gauge,
  Search,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
  Settings
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import axios from "axios";

// Interface del auto
interface ICar {
  nombre: string;
  marca: string;
  modelo: string;
  anio: number;
  km: number;
  motor: string;
  color: string;
  combustible: string;
  transmision: string;
  puertas: number;
  imagenesURLS: string[];
  slug: string;
  disponible: boolean;
}

function formatKilometers(km: number): string {
  if (km === 0) return "0 km (Nuevo)";
  if (km < 1000) return `${km} km`;
  return `${(km / 1000).toFixed(1)}k km`;
}

function getConditionBadge(km: number, year: number) {
  const currentYear = new Date().getFullYear();
  if (km === 0) return { text: "Nuevo", className: "bg-green-500" };
  if (year >= currentYear - 1 && km < 20000)
    return { text: "Seminuevo", className: "bg-[#CE987E]" };
  return { text: "Usado", className: "bg-amber-500" };
}

export default function InventarioPage() {
  const [carsData, setCarsData] = useState<ICar[]>([]);

  async function getCars() {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/cars`;
      const response = await axios.get(url);

      setCarsData(response.data.data);
    } catch (err) {
      console.error("Error al obtener los autos:", err);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Page Header */}
      <section className="bg-[#363435] text-white pt-24 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-amber-500">Vehiculos</span>
            </h1>
            <p className="text-md md:text-xl text-[#E3E3E3] max-w-2xl mx-auto">
              Explora nuestra amplia selección de vehículos usados y nuevos con
              garantía y financiamiento disponible
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por marca, modelo..."
                  className="pl-10 w-full sm:w-64 focus:ring-[#CE987E]"
                />
              </div>

              <select className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#CE987E] focus:border-[#CE987E]">
                <option>Todas las marcas</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
                <option>Chevrolet</option>
                <option>Nissan</option>
                <option>Hyundai</option>
              </select>

              <select className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#CE987E] focus:border-[#CE987E]">
                <option>Cualquier año</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>

              <select className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#CE987E] focus:border-[#CE987E]">
                <option>Tipo de combustible</option>
                <option>Gasolina</option>
                <option>Híbrido</option>
                <option>Eléctrico</option>
                <option>Diésel</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {carsData.length} vehículos encontrados
              </span>
              <div className="flex items-center gap-2">
                <Button className="cursor-default" variant="outline" size="sm">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsData.length > 0 ? (
              carsData.map((car, index) => {
                const condition = getConditionBadge(car.km, car.anio);

                return (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative">
                      <Image
                        src={
                          car.imagenesURLS[0] ||
                          "/placeholder.svg?height=250&width=350"
                        }
                        alt={car.nombre}
                        width={350}
                        height={250}
                        className="w-full h-96 object-top object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge
                        className={`absolute top-3 left-3 ${condition.className}`}
                      >
                        {condition.text}
                      </Badge>
                      {car.combustible === "Híbrido" && (
                        <Badge className="absolute top-3 right-3 bg-green-600">
                          Eco
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Nombre del auto */}
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {car.nombre}
                        </h3>

                        {/* Información principal */}
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Car className="h-4 w-4 text-[#CE987E]" />
                            <span>{car.marca}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{car.modelo}</span>
                          </div>
                        </div>

                        {/* Detalles técnicos */}
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-[#CE987E]" />
                            <span>{car.anio}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Gauge className="h-4 w-4 text-[#CE987E]" />
                            <span>{formatKilometers(car.km)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Fuel className="h-4 w-4 text-[#CE987E]" />
                            <span>{car.combustible}</span>
                          </div>

                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Settings className="h-4 w-4 text-[#CE987E]" />
                            <span>{car.motor}</span>
                          </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex gap-2 pt-2">
                          <Link href={`/autos/${car.slug}`} className="flex-1">
                            <Button className="w-full bg-[#363435] hover:bg-[#2a2829] text-sm">
                              Ver Detalles
                            </Button>
                          </Link>
                          <Link href={`https://api.whatsapp.com/send?phone=+5491137437882&text=Hola, vi en la web el ${car.nombre} ${car.color}, año ${car.anio} y me gustaría obtener más información`} target="_blank">
                            <Button
                              size="sm"
                              className="w-full px-3 border-[#CE987E] text-white bg-[#CE987E] hover:bg-[#b38169] border h-10"
                            >
                              Contactar
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <>
                <div></div>
                <div className="flex items-center justify-center">
                  <p className="text-center text-gray-500">
                    No se encontraron vehículos disponibles en este momento.
                  </p>
                </div>
                <div></div>
              </>
            )}
          </div>

          {/* Pagination */}
          {carsData.length > 0 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button variant="outline" disabled>
                <ChevronLeft className="h-4 w-2" />
              </Button>

              <div className="flex items-center gap-2">
                <Button className="bg-[#363435] text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
              </div>

              <Button variant="outline">
                <ChevronRight className="h-4 w-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#363435] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encontraste lo que buscas?
          </h2>
          <p className="text-xl mb-8 text-[#E3E3E3]">
            Contáctanos y te ayudamos a encontrar el vehículo perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+5491137437882&text=Hola,%20quisiera%20saber%20si%20se%20puede%20conseguir%20un..."
              }
              target="_blank"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#CE987E] hover:bg-[#b8876e] px-8"
              >
                Solicitar Vehículo Específico
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

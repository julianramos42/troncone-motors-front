import Link from "next/link";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <section className="py-16 bg-[#363435] text-white">
      <div className="mx-auto px-14 text-center">
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para Encontrar tu Auto Ideal?
        </h2>
        <p className="text-xl mb-8 text-[#E3E3E3]">
          Contáctanos hoy y te ayudaremos a encontrar el vehículo perfecto para
          ti
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.429821968297!2d-58.40701312425253!3d-34.76995327289507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2ee47438781%3A0xb1295dda82e3fda1!2sTroncone%20MOTORS!5e0!3m2!1ses-419!2sar!4v1750399299798!5m2!1ses-419!2sar"
            className="w-full rounded-lg shadow-lg"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1750399526885!6m8!1m7!1spvgHYXh1xAd4lK9sG3f0HA!2m2!1d-34.76991277362161!2d-58.4045220007042!3f94.5251477333173!4f-5.549579147992631!5f0.7820865974627469"
            className="w-full rounded-lg shadow-lg"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href={""} className="inline-block">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 px-8">
              Solicitar Cotización
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

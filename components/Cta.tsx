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
        <div className="hidden md:grid lg:grid-cols-2 gap-12 items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d818.7930878759342!2d-58.398373730333404!3d-34.826758897415075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ5JzM2LjMiUyA1OMKwMjMnNTEuOCJX!5e0!3m2!1ses-419!2sar!4v1750400225617!5m2!1ses-419!2sar"
            className="w-full rounded-lg shadow-lg"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1750400160149!6m8!1m7!1sTvhRMgA3L6z-i39uYStpbg!2m2!1d-34.82680591012301!2d-58.39781634596893!3f108.08355760735304!4f0.7104394125189799!5f1.354682439804951"
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

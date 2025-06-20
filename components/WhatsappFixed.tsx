import Link from "next/link"
import Image from "next/image"

export default function WhatsappFixed() {
  return (
    <div className="hidden z-20 md:fixed bottom-4 right-4 hover:scale-105 md:flex flex-col gap-2 items-center justify-center bg-[#363435] hover:bg-[#2a2829] shadow-lg rounded-lg p-2 transition-transform duration-300 ease-in-out">
      <Link
        href={
          "https://api.whatsapp.com/send?phone=+5491137437882&text=Hola,%20me%20gustaría%20obtener%20más%20información"
        }
        target="_blank"
      >
        <Image
          src={"/whatsapp.png"}
          alt="whatsapp logo"
          width={50}
          height={50}
          className="rounded-lg"
        ></Image>
      </Link>
    </div>
  )
}

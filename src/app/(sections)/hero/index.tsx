import { lora } from "@/app/fonts";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
export default function Hero() {
  /**
   * grid two columns , first column overflow x , second has an image
   * margin x 124px , 36px padding
   * margin top 32
   * col 1: flex col justify center items start text start
   */
  return (
    <section className="grid grid-cols-2 gap-0" id="hero">
      <div className="flex flex-col justify-center items-start text-start">
        <h1
          className={`${lora.className} text-8xl font-medium text-title text-nowrap text-over overflow-hidden leading-snug`}
        >
          Choose Your
          <br />
          Best{" "}
          <span className="inline-block bg-gradient-primary text-white rotate-12 rounded-2xl px-3 pb-2 hover:rotate-[-24deg] transition-transform duration-300 ease-in-out">
            Yoga
          </span>
          <Image
            alt="star"
            src="/home-star.png"
            width={500}
            height={500}
            className="w-20 h-20 inline-block object-contain pl-7"
          />
          <br /> Teacher
        </h1>
        <p className="text-base text-start mt-5">
          Calm your mind and body with the best yoga <br /> teachers available,
          relax your day and stay positive.
        </p>
        <button className="bg-gradient-primary text-white pl-7 pr-14 py-4 rounded-[4rem] mt-8">
          Get Started
          <Icon
            icon="akar-icons:arrow-right"
            className="text-2xl inline-block"
          />
        </button>
        <div className="flex gap-16 mt-12">
          <p className={`${lora.className} inline-block text-center text-6xl`}>
            300+
            <br />
            <span className="text-lg">Yoga Class</span>
          </p>
          <p className={`${lora.className} inline-block text-center text-6xl`}>
            40+
            <br />
            <span className="text-lg">Participants</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          alt="yoga"
          src="/home-yoga.png"
          className="object-contain h-full w-full"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}

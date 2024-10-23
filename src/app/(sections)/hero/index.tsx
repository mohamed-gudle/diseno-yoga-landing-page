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
    <section className="grid lg:grid-cols-2 gap-0 py-12">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
        <h1
          className={`${lora.className} text-5xl lg:text-8xl font-medium text-title lg:text-nowrap overflow-hidden leading-snug dark:text-title-dark`}
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
          <span className="lg:block hidden lg:h-0">
            <br />
          </span>
          Teacher
        </h1>
        <p className="text-base lg:text-start text-center mt-5">
          Calm your mind and body with the best yoga
          <span className="lg:block hidden lg:h-0">
            <br />
          </span>
          teachers available, relax your day and stay positive.
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

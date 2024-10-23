import { Lora, Poppins } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export { lora, poppins };

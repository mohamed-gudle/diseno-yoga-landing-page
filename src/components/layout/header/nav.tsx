"use client";
import { lora } from "@/app/fonts";
import useTheme from "@/theme/use-theme";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function Navigation() {
  const { mode, setMode } = useTheme();
  return (
    <nav className="hidden lg:flex justify-between items-center px-40 py-6 bg-background dark:bg-background-dark">
      <a
        className={`text-xl font-bold gradient-text bg-gradient-primary font-lora ${lora.className}`}
        href="#"
      >
        Yoga
      </a>
      <div className="flex gap-16 ">
        <a
          href="#"
          className="text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent font-medium"
        >
          Health
        </a>
        <a
          href="#"
          className="text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent font-medium"
        >
          Routines
        </a>
        <a
          href="#"
          className="text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent font-medium"
        >
          Follow
        </a>

        <Icon
          icon={mode === "dark" ? "ri:sun-line" : "ri:moon-line"}
          className="text-title h-6 w-6 cursor-pointer dark:text-text-dark"
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        />
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  const { mode, setMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const Menu = (
    <div className="lg:hidden flex flex-col gap-8 w-full bg-white bg-opacity-90 ">
      <div
        className="flex justify-end pr-6 pt-4 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Icon
          icon="ri:close-line"
          className="text-title h-6 w-6 dark:text-text-dark"
        />
      </div>
      <div className="flex flex-col gap-16 items-start p-12">
        <a
          href="#"
          className="text-lg font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
        >
          Home
        </a>
        <a
          href="#"
          className="text-lg font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
        >
          Health
        </a>
        <a
          href="#"
          className="text-lg font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
        >
          Routines
        </a>
        <a
          href="#"
          className="text-lg font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
        >
          Follow
        </a>
      </div>
    </div>
  );

  if (isOpen) {
    return Menu;
  }

  return (
    <nav className="lg:hidden flex justify-between items-center px-10 py-6">
      <a
        className={`text-xl font-bold gradient-text bg-gradient-primary font-lora ${lora.className}`}
        href="#"
      >
        Yoga
      </a>
      <div className="flex gap-6 ">
        <Icon
          icon={mode === "dark" ? "ri:sun-line" : "ri:moon-line"}
          className="text-title h-6 w-6 cursor-pointer dark:text-text-dark"
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        />

        <Icon
          icon="ri:apps-2-line"
          className="text-title h-6 w-6 cursor-pointer dark:text-text-dark"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </nav>
  );
}

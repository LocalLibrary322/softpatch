import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🌌 STARS (TIDAK BISA NUTUP CLICK) */}
      <div className="absolute inset-0 pointer-events-none 
        bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:25px_25px] opacity-20">
      </div>

      {/* 🌍 LEFT PLANET GLOW */}
      <div className="absolute left-0 top-0 h-full w-[200px] pointer-events-none">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/40 via-green-400/30 to-transparent blur-2xl"></div>
      </div>

      {/* 🧍 FLOATING LOGO (3D FEEL) */}
      <motion.img
        src="/logo.png"
        className="absolute right-20 w-72 opacity-70"
        animate={{
          rotateY: 360,
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />

      {/* 🔴 MAIN CONTENT */}
      <div className="z-10 flex flex-col items-start">

        {/* TITLE */}
        <h1 className="text-[120px] font-bold text-red-500 leading-none drop-shadow-[0_0_40px_red]">
          SoftPatch
        </h1>

        {/* SUBTEXT */}
        <p className="mt-2 text-gray-300 text-lg">
          Buy Soft Patch, a great serverside for beginners!
        </p>

        {/* BUTTONS */}
        <div className="flex gap-10 mt-8 text-lg">

          <a href="https://discord.gg/zeyKfgCFFg">
            <button className="hover:text-red-500 hover:drop-shadow-[0_0_15px_red] transition">
              Discord
            </button>
          </a>

          <a href="/buy">
            <button className="hover:text-red-500 hover:drop-shadow-[0_0_15px_red] transition">
              Buy
            </button>
          </a>

        </div>

      </div>
    </div>
  );
}

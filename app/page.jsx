import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

      {/* STARS */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>

      {/* ROTATING LOGO */}
      <motion.img
        src="/logo.png"
        className="absolute right-10 w-72 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />

      {/* TITLE */}
      <h1 className="text-6xl font-bold text-red-500 drop-shadow-[0_0_30px_red]">
        SoftPatch
      </h1>

      <p className="mt-4 text-gray-300 text-center max-w-xl">
        Buy Soft Patch, a great serverside for beginners!
      </p>

      {/* FEATURES */}
      <div className="mt-6 text-center text-gray-400 space-y-1">
        <p>Rare Scripts</p>
        <p>Lua Scripts</p>
        <p>Good Games</p>
        <p>Kind of Good Staff</p>
        <p>TOS Is Fair</p>
        <p>Compatible With Mobile And PC</p>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-8">
        <a href="https://discord.gg/zeyKfgCFFg">
          <button className="px-6 py-2 border border-red-500 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_red] transition">
            Discord
          </button>
        </a>

        <a href="/buy">
          <button className="px-6 py-2 border border-red-500 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_red] transition">
            Buy
          </button>
        </a>
      </div>

    </div>
  );
}

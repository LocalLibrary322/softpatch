import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🌌 STARS */}
      <div className="absolute inset-0 pointer-events-none 
        bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:25px_25px] opacity-20">
      </div>

      {/* 🌍 LEFT PLANET */}
      <div className="absolute left-0 top-0 h-full w-[250px] pointer-events-none">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/40 via-green-400/30 to-transparent blur-3xl"></div>
      </div>

      {/* 🔄 FLOATING LOGO */}
      <motion.img
        src="/logo.png"
        className="absolute right-20 w-80 opacity-70"
        animate={{ rotateY: 360, y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      {/* 🔴 MAIN CONTENT */}
      <div className="z-10 flex flex-col items-start max-w-2xl">

        {/* TITLE */}
        <h1 className="text-[110px] font-bold text-red-500 leading-none drop-shadow-[0_0_40px_red]">
          SoftPatch
        </h1>

        {/* SUBTEXT */}
        <p className="mt-3 text-gray-300 text-lg">
          Buy Soft Patch, a great serverside for beginners!
        </p>

        {/* 🔥 FEATURES (INI YANG BIKIN GAK SEPI) */}
        <div className="mt-6 space-y-1 text-gray-400">
          <p>• Rare Scripts</p>
          <p>• Lua Scripts</p>
          <p>• Good Games Support</p>
          <p>• Kind of Good Staff</p>
          <p>• Fair TOS System</p>
          <p>• Compatible Mobile & PC</p>
        </div>

        {/* ⚡ EXTRA INFO */}
        <div className="mt-6 text-sm text-gray-500">
          <p>✔ Auto Convert</p>
          <p>✔ Fast Execution</p>
          <p>✔ Clean UI</p>
          <p>✔ Good Watermark</p>
        </div>

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

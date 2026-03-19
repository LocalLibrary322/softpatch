"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* STARS */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: "2px",
              height: "2px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* bet */}
      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

      {/* cool */}
      <motion.img
        src="/logo.png"
        className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-20 z-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="max-w-md text-center md:text-left">

          <h1 className="text-4xl font-bold mb-4">
            Buy Soft Patch, a great serverside for beginners!
          </h1>

          <div className="text-gray-400 space-y-1 mb-6">
            <p>Rare Scripts</p>
            <p>Lua Scripts</p>
            <p>Good Games</p>
            <p>Kind of Good staff</p>
            <p>TOS Is Fair</p>
            <p>Compatible With Mobile And PC</p>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://discord.gg/zeyKfgCFFg"
              className="px-6 py-2 bg-white text-black rounded-xl"
            >
              Discord
            </a>

            <a
              href="/buy"
              className="px-6 py-2 border border-gray-700 rounded-xl"
            >
              Buy
            </a>
          </div>

          {/* TOS */}
          <div className="mt-6 flex items-center gap-2 justify-center md:justify-start">
            <img src="/logo.png" className="w-6 opacity-80" />

            <a href="/tos" className="text-sm text-gray-500 hover:underline">
              TOS (Terms Of Service)
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}

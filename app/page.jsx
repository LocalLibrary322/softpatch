import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">

      {/* Bintang background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-red-500 drop-shadow-[0_0_30px_red]">
        SoftPatch
      </h1>

      <p className="mt-4 text-gray-300 text-center">
        Buy Soft Patch, a great serverside for beginners!
      </p>

      {/* Buttons */}
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

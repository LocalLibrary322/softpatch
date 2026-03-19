export default function BuyPage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center gap-10">

      <h1 className="text-4xl text-red-500 drop-shadow-[0_0_20px_red]">
        Buy SoftPatch
      </h1>

      <div className="flex gap-20">

        {/* INTERNAL */}
        <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_25px_red] text-center">
          <h2 className="text-red-400 mb-4">Internal</h2>
          <p>Gamepass</p>
          <a href="https://www.roblox.com/game-pass/1752244538/Internal">Buy</a>
          <p className="mt-2">Ko-fi = $5</p>
          <a href="https://ko-fi.com/softpatch">Buy</a>
        </div>

        {/* EXTERNAL */}
        <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_25px_red] text-center">
          <h2 className="text-red-400 mb-4">External</h2>
          <p>Gamepass</p>
          <a href="https://www.roblox.com/game-pass/1753400335/External">Buy</a>
          <p className="mt-2">Ko-fi = $10</p>
          <a href="https://ko-fi.com/softpatch">Buy</a>
        </div>

      </div>

      {/* ABUSE PERMISSION */}
      <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_40px_red] text-center">
        <h2 className="text-red-500">Abuse Permission</h2>
        <p className="mt-2">Works for all access plan</p>
        <p className="mt-2">Price: $15</p>
      </div>

      {/* FEATURES */}
      <div className="text-gray-400 text-center space-y-1">
        <p>Auto Convert</p>
        <p>Fast Execution</p>
        <p>Good UI</p>
        <p>Good Watermark</p>
      </div>

    </div>
  );
}

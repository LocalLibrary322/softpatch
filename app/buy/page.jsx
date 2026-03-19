export default function Buy() {
  return (
    <main className="min-h-screen bg-black text-white text-center py-12 px-6">

      <h1 className="text-3xl font-bold mb-10">Buy Page</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {/* INTERNAL */}
        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Internal</h2>

          <a href="https://www.roblox.com/game-pass/1752244538/Internal" className="block text-blue-400">
            Gamepass
          </a>

          <p className="mt-4">Ko-fi = 5 Dollar</p>
          <a href="https://ko-fi.com/softpatch" className="text-blue-400">
            Pay (MUST 5$)
          </a>
        </div>

        {/* EXTERNAL */}
        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">External</h2>

          <a href="https://www.roblox.com/game-pass/1753400335/External" className="block text-blue-400">
            Gamepass
          </a>

          <p className="mt-4">Ko-fi = 10 Dollar</p>
          <a href="https://ko-fi.com/softpatch" className="text-blue-400">
            Pay (MUST 10$)
          </a>
        </div>

      </div>

      <div className="mt-10 text-gray-400 space-y-1">
        <p>Auto Convert</p>
        <p>Fast Execution</p>
        <p>Good UI</p>
        <p>Good Watermark</p>
      </div>

    </main>
  );
}

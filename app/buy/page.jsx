export default function BuyPage() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center gap-10">

      <h1 className="text-4xl font-bold text-red-500 drop-shadow-[0_0_20px_red]">
        Buy SoftPatch
      </h1>

      {/* INTERNAL & EXTERNAL */}
      <div className="flex gap-20">

        {/* INTERNAL */}
        <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_25px_red]">
          <h2 className="text-xl text-red-400 mb-4">Internal</h2>
          <p>Gamepass</p>
          <p>Ko-fi = $5</p>
        </div>

        {/* EXTERNAL */}
        <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_25px_red]">
          <h2 className="text-xl text-red-400 mb-4">External</h2>
          <p>Gamepass</p>
          <p>Ko-fi = $10</p>
        </div>

      </div>

      {/* ABUSE PERMISSION */}
      <div className="bg-black/50 border border-red-500 p-6 rounded-xl shadow-[0_0_40px_red] text-center">
        <h2 className="text-xl text-red-500">Abuse Permission</h2>
        <p className="mt-2">Works for all access plan</p>
        <p className="mt-2">Price: $15 (Ko-fi / Gamepass)</p>
      </div>

    </div>
  );
}

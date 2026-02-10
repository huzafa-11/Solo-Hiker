export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Solo Hiker
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Track, plan, and discover amazing hiking trails
          </p>
          <p>
            This is you journey to bang the world and 
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Get Started
          </button>
          
        </div>
      </div>
    </main>
  );
}

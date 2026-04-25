import Footer from "../components/Footer";

export default function Memory() {
  return (
    <div className="px-6 pt-36 pb-20">
      
      {/* Title */}
      <h1 className="text-4xl font-display uppercase tracking-[0.2em] text-center">
        Memories ✨
      </h1>

      <p className="text-center text-white/60 mt-4">
        Moments that made our journey unforgettable
      </p>

      {/* Images */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        
        <img src="/videos/mem1.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls7dup.jpeg" className="w-100 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/shivmem2.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/mem3.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/mem4.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls8.jpeg" className="w-100 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls2.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls9.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/girls6dup.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition"/>
        <img src="/videos/girls10.jpeg" className="w-100 h-60 object-cover rounded-xl hover:scale-105 transition" />
        <img src="/videos/mem9.jpeg" className="w-90 h-60 object-cover rounded-xl hover:scale-105 transition" />
        

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
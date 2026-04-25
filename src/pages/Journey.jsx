import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "../components/Reveal.jsx";
import Footer from "../components/Footer.jsx";
import { journeyTimeline } from "../data/timelines.js";

/* ───────────── TRAIL IMAGES ───────────── */
const TRAIL_IMAGES = [
  "/videos/shiva.jpeg","/videos/chandu.jpeg","/videos/naveen1.jpeg",
  "/videos/gnana.jpeg","/videos/mounika.jpeg","/videos/shakeer.jpeg",
  "/videos/pushpa.jpeg","/videos/sharvani.jpeg","/videos/uma.jpeg",
  "/videos/mahendra.jpeg","/videos/santhosh.jpeg","/videos/22481A5488.jpeg",
  "/videos/nsrihari.jpeg","/videos/okrafiq.jpeg","/videos/mouli.jpeg",
  "/videos/shekar.jpeg","/videos/hamza.jpeg","/videos/prafeeq.jpeg",
  "/videos/anu.jpeg","/videos/tabasum.jpeg","/videos/vijay.jpeg",
  "/videos/kashif1.jpeg","/videos/staher1.jpeg","/videos/ribika.jpeg",
  "/videos/smdtaher.jpeg","/videos/shahin.jpeg","/videos/raju.jpeg",
  "/videos/prem.jpeg","/videos/vamsi.jpeg","/videos/22481A54B7.jpeg",
  "/videos/lr.jpeg","/videos/dharani.jpeg","/videos/mithin.jpeg",
  "/videos/vishnu.jpeg","/videos/bharathuk.jpeg","/videos/santhosh2.jpeg",
  "/videos/vanaja.jpeg","/videos/venky1.jpeg","/videos/lalitha1.jpeg",
  "/videos/mokshgna.jpeg","/videos/mahalaskhmi.jpeg","/videos/hakshita.jpeg",
  "/videos/kavya.jpeg","/videos/sathya.jpeg","/videos/rahul.jpeg",
  "/videos/veera.jpeg","/videos/tbharath.jpeg","/videos/sivaputra.jpeg"
];

/* ───────────── TRAIL CURSOR ───────────── */
function TrailCursor() {
  const [trails, setTrails] = useState([]);
  const idRef = useRef(0);
  const indexRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      // Calculate distance moved since last image
      const distance = Math.hypot(
        e.clientX - lastPos.current.x,
        e.clientY - lastPos.current.y
      );

      // Only spawn an image if mouse moved more than 90 pixels
      // This is what prevents the "too fast" feeling
      if (distance > 90) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        
        const newId = idRef.current++;
        const imgIndex = indexRef.current % TRAIL_IMAGES.length;
        indexRef.current++;

        const src = TRAIL_IMAGES[imgIndex];

        setTrails((prev) => [
          ...prev.slice(-15), // Reduced buffer for better performance
          {
            id: newId,
            x: e.clientX,
            y: e.clientY,
            src,
            rotate: (Math.random() - 0.5) * 40,
            scale: 0.6 + Math.random() * 0.4,
          },
        ]);

        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newId));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9000 }}>
      <AnimatePresence mode="popLayout">
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0, scale: 0.5, rotate: trail.rotate - 10 }}
            animate={{ opacity: 1, scale: trail.scale, rotate: trail.rotate }}
            exit={{ opacity: 0, scale: 0.2, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              left: trail.x - 60,
              top: trail.y - 80,
              width: 150,
              height: 240,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              willChange: "transform, opacity",
            }}
          >
            <img
              src={trail.src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ───────────── PAGE ───────────── */
export default function Journey() {
  const [typed, setTyped] = useState("");
  const message =
    "A batch that began as strangers turned into a family of dreamers, builders, and believers.";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));
      if (i >= message.length) clearInterval(iv);
    }, 50); // Slightly slower typing for a smoother feel
    return () => clearInterval(iv);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Smoother ScrollTrigger setup
    gsap.utils.toArray(".journey-card").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div style={{ position: "relative", cursor: "none", scrollBehavior: "smooth" }}>
      <TrailCursor />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h1 className="font-display uppercase text-4xl tracking-[0.2em]">
              Our Journey 🕰️
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">{typed}</p>
          </Reveal>

          <div className="mt-20 flex flex-col gap-10">
            {journeyTimeline.map((item) => (
              <div
                key={item.year}
                className="journey-card rounded-2xl border border-white/5 p-8 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-500"
              >
                <span className="text-purple-400 font-mono text-sm tracking-widest">{item.year}</span>
                <h3 className="text-2xl mt-2 font-medium">{item.title}</h3>
                <p className="text-white/50 text-base mt-4 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
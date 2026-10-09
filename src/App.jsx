import React, { useState, useEffect, useRef } from 'react';

// The most used and widely known frameworks
const TECH_ITEMS = [
  ['REACT', 'Re', '#2563eb', 'react.dev'],
  ['NEXT.JS', 'N', '#334155', 'nextjs.org'],
  ['LARAVEL', 'Lv', '#ef4444', 'laravel.com'],
  ['NODE.JS', 'Nd', '#16a34a', 'nodejs.org'],
  ['VUE.JS', 'Vu', '#10b981', 'vuejs.org'],
  ['TAILWIND', 'Tw', '#0ea5e9', 'tailwindcss.com'],
  ['POSTGRESQL', 'Pg', '#0f766e', 'postgresql.org'],
  ['DOCKER', 'Dk', '#0284c7', 'docker.com'],
];

const CASE_STUDIES = [
  {
    num: '01',
    client: 'NDK Exhaust × RGN Performance',
    title: 'E-Katalog & Warehouse',
    desc: 'Real-time inventory, barcode/QR tracking and role-based logistics.',
    color: '#2f6fed',
    image: '/projects/p1-ndk.jpg',
    url: 'https://warehouse.ndkexhaust.com/',
    tag: 'E-Katalog & WMS',
    stack: 'React · Firebase · Tailwind',
  },
  {
    num: '02',
    client: 'DSP Agency · Belgium',
    title: 'Lead Tracking CRM',
    desc: 'Lead tracking and workflow automation with REST integrations.',
    color: '#4fa3d9',
    image: '/projects/p2-dsp.jpg',
    tag: 'Lead CRM',
    stack: 'Laravel · MySQL',
  },
  {
    num: '03',
    client: 'PT. Cazh Technology',
    title: 'Order & Task Platform',
    desc: 'Order dashboard with role-based access control.',
    color: '#1d4ed8',
    image: '/projects/p3-cazh.jpg',
    tag: 'Order Platform',
    stack: 'Laravel · Livewire · RBAC',
  },
  {
    num: '04',
    client: 'Academic Capstone',
    title: 'Laundry Decision System',
    desc: 'AHP method to compare services by price, speed and quality.',
    color: '#0f766e',
    image: '/projects/p4-ahp.jpg',
    tag: 'AHP Laundry DSS',
    stack: 'Laravel · MySQL',
  },
  {
    num: '05',
    client: 'Personal Automation',
    title: 'Job Vacancy Finder',
    desc: 'N8N workflow scraping and filtering jobs into Google Sheets.',
    color: '#3b5b9e',
    image: '/projects/p5-n8n.jpg',
    tag: 'Job Finder',
    stack: 'N8N · Webhooks',
  },
];

const TERRITORIES = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Clean, organized applications from database to interface.',
    chips: ['Laravel', 'React', 'Next.js', 'Vue', 'Tailwind'],
  },
  {
    num: '02',
    title: 'Database & Data',
    desc: 'Relational schema design, ORM-driven access and safe migrations.',
    chips: ['PostgreSQL', 'MySQL', 'Firebase', 'Eloquent'],
  },
  {
    num: '03',
    title: 'APIs & Backend',
    desc: 'REST services, authentication and third-party integrations.',
    chips: ['Node.js', 'REST', 'Google OAuth', 'Go'],
  },
  {
    num: '04',
    title: 'Automation & Tools',
    desc: 'Workflows that remove manual work from real business processes.',
    chips: ['N8N', 'Docker', 'Git / GitHub', 'Agile / Scrum'],
  },
];

// Helper to pad frame number
const padZero = (n) => String(n).padStart(3, '0');

/**
 * 3D Motion Sequence 1 Component (150 frames, scroll scrub + interactive controls)
 */
function MotionSequence1() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const imagesRef = useRef([]);

  const TOTAL_FRAMES = 150;

  // Preload frames
  useEffect(() => {
    let count = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/motion1/ezgif-frame-${padZero(i)}.webp`;
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      images[i] = img;
    }
    imagesRef.current = images;
  }, []);

  // Draw current frame on canvas
  const drawFrame = (idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[idx];

    if (img && img.complete && img.naturalWidth > 0) {
      canvas.width = canvas.clientWidth * window.devicePixelRatio || 800;
      canvas.height = canvas.clientHeight * window.devicePixelRatio || 500;

      // Draw aspect-ratio contain/cover
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.min(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShiftY = (canvas.height - img.naturalHeight * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        centerShiftX,
        centerShiftY,
        img.naturalWidth * ratio,
        img.naturalHeight * ratio
      );
    }
  };

  useEffect(() => {
    drawFrame(frameIndex);
  }, [frameIndex, loadedCount]);

  // Scroll scrubbing through the 250vh container
  useEffect(() => {
    if (isPlaying) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollDist = container.offsetHeight - window.innerHeight;

      if (scrollDist > 0) {
        const progress = Math.min(1, Math.max(0, -rect.top / scrollDist));
        const frame = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1));
        setFrameIndex(frame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  // Auto-play loop toggle
  useEffect(() => {
    if (!isPlaying) return;

    let animId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const playLoop = (time) => {
      if (time - lastTime > interval) {
        setFrameIndex((prev) => (prev >= TOTAL_FRAMES ? 1 : prev + 1));
        lastTime = time;
      }
      animId = requestAnimationFrame(playLoop);
    };

    animId = requestAnimationFrame(playLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const captionPhase =
    frameIndex < 50
      ? '01 / GEOMETRY — Interactive 3D Spatial Rendering'
      : frameIndex < 100
      ? '02 / ARCHITECTURE — Fluid Animation & Seamless Physics'
      : '03 / DELIVERY — Optimized for Web Standards & Precision';

  return (
    <section ref={containerRef} className="h-[250vh] relative border-b border-[#22304a] bg-[#070b14]">
      <div className="sticky top-0 h-screen flex flex-col justify-between items-center py-10 px-4 overflow-hidden">
        {/* Section Header */}
        <div className="text-center z-10 pt-4">
          <div className="font-['Instrument_Serif'] italic text-[#4fa3d9] text-sm">(Interactive 3D Motion)</div>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold tracking-tight text-white mt-1">
            Engineered with <em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">motion.</em>
          </h2>
          <p className="text-[#8a97ad] text-xs max-w-md mx-auto mt-1">
            Scroll to fly through the dynamic viewport sequence or use playback controls below.
          </p>
        </div>

        {/* Canvas Display Viewport */}
        <div className="relative w-full max-w-4xl flex-1 flex items-center justify-center my-4">
          <canvas
            ref={canvasRef}
            className="w-full h-full max-h-[560px] object-contain rounded-2xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
          />

          {/* Floating Phase Badge */}
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-cyan-300">
            {captionPhase}
          </div>
        </div>

        {/* Interactive Scrub & Playback Controller */}
        <div className="w-full max-w-xl z-10 bg-[#111a2e]/80 border border-[#22304a] backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-4 text-xs shadow-2xl">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 rounded-full bg-[#2f6fed] hover:bg-[#3b82f6] text-white font-bold transition-all"
          >
            {isPlaying ? 'Pause' : 'Play 3D'}
          </button>

          <input
            type="range"
            min="1"
            max={TOTAL_FRAMES}
            value={frameIndex}
            onChange={(e) => {
              setIsPlaying(false);
              setFrameIndex(Number(e.target.value));
            }}
            className="flex-1 accent-[#4fa3d9] cursor-pointer"
          />

          <span className="font-mono text-[11px] text-[#8a97ad] whitespace-nowrap">
            {padZero(frameIndex)} / {TOTAL_FRAMES}
          </span>
        </div>
      </div>
    </section>
  );
}

/**
 * 3D Motion Background 2 Component (300 frames, ambient loop for Contact section)
 */
function MotionBackground2() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(false);
  const imagesRef = useRef([]);
  const frameRef = useRef(1);

  const TOTAL_FRAMES = 300;

  // Preload frames in chunks
  useEffect(() => {
    const images = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/motion2/ezgif-frame-${padZero(i)}.jpg`;
      images[i] = img;
    }
    imagesRef.current = images;
  }, []);

  // Visibility tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Ambient playback loop
  useEffect(() => {
    let animId;
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const loop = (time) => {
      if (isVisibleRef.current && time - lastTime > interval) {
        frameRef.current = (frameRef.current % TOTAL_FRAMES) + 1;
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const img = imagesRef.current[frameRef.current];

          if (img && img.complete && img.naturalWidth > 0) {
            canvas.width = canvas.clientWidth || 800;
            canvas.height = canvas.clientHeight || 600;

            // Draw cover aspect ratio
            const hRatio = canvas.width / img.naturalWidth;
            const vRatio = canvas.height / img.naturalHeight;
            const ratio = Math.max(hRatio, vRatio);
            const centerShiftX = (canvas.width - img.naturalWidth * ratio) / 2;
            const centerShiftY = (canvas.height - img.naturalHeight * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
              img,
              0,
              0,
              img.naturalWidth,
              img.naturalHeight,
              centerShiftX,
              centerShiftY,
              img.naturalWidth * ratio,
              img.naturalHeight * ratio
            );
          }
        }
        lastTime = time;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-25 mix-blend-screen filter contrast-125"
      />
      {/* Dark gradient overlay to preserve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#0a1020]/75 to-[#0a1020]" />
    </div>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [preloaderPercent, setPreloaderPercent] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -50, y: -50 });
  const [cursorExpanded, setCursorExpanded] = useState(false);
  const [hoverPreview, setHoverPreview] = useState({ show: false, text: '', x: 0, y: 0 });
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [openTerritoryIdx, setOpenTerritoryIdx] = useState(null);
  const [activeTunnelIdx, setActiveTunnelIdx] = useState(0);

  const heroRef = useRef(null);
  const worldRef = useRef(null);
  const hudRef = useRef(null);
  const caseSectionRef = useRef(null);

  // Preloader count
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const interval = setInterval(() => {
      setPreloaderPercent((prev) => {
        const next = prev + Math.ceil(Math.random() * 8);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPreloaderDone(true);
            document.body.style.overflow = '';
          }, 350);
          return 100;
        }
        return next;
      });
    }, 55);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkipPreloader = () => {
    setPreloaderDone(true);
    document.body.style.overflow = '';
  };

  // Custom Cursor
  useEffect(() => {
    let animationFrameId;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const isInteractive = !!e.target.closest('a, button, [role="button"], .interactive-target, input');
      setCursorExpanded(isInteractive);
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      setCursorPos({ x: current.x, y: current.y });
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handleMouseMove);
    document.addEventListener('pointerover', handleMouseOver);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      document.removeEventListener('pointerover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll handler for tunnel, reading bar, and pinned case studies
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Reading progress
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // 3D Hero Tunnel
      if (heroRef.current && worldRef.current) {
        const heroHeight = heroRef.current.offsetHeight - window.innerHeight;
        const p = Math.min(Math.max(scrollY / heroHeight, 0), 1);
        const DEPTH = 5200;
        const tz = p * (DEPTH + 300);

        worldRef.current.style.transform = `translateZ(${tz}px) rotateZ(${p * 6}deg)`;

        // Find nearest tech card for HUD
        let best = 1e9;
        let bestIdx = 0;
        TECH_ITEMS.forEach((_, j) => {
          const dd = Math.abs(-(j + 1) * DEPTH / TECH_ITEMS.length + tz + 450);
          if (dd < best) {
            best = dd;
            bestIdx = j;
          }
        });
        setActiveTunnelIdx(bestIdx);
      }

      // Case Studies Pinned Scroll
      if (caseSectionRef.current) {
        const rect = caseSectionRef.current.getBoundingClientRect();
        const totalDistance = rect.height - window.innerHeight;
        const progress = Math.min(0.999, Math.max(0, -rect.top / totalDistance));
        const index = Math.floor(progress * CASE_STUDIES.length);
        setActiveCaseIdx(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const manifestoText = "Most developers try to stand out with the newest stack. The real work happens elsewhere: clean code, careful database design and systems that keep running after launch. I build web applications that businesses can rely on, and I own every line of it.";
  const manifestoWords = manifestoText.split(' ');

  return (
    <div className="relative min-h-screen bg-[#0a1020] text-[#e8edf5] font-['Inter_Tight',sans-serif] selection:bg-[#2f6fed] selection:text-white">
      {/* Preloader */}
      {!preloaderDone && (
        <div
          id="pre"
          className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          <div className="text-center overflow-hidden">
            <h2 className="font-['Instrument_Serif'] text-[clamp(2.4rem,9vw,6rem)] leading-none animate-[upPreload_1s_0.1s_both_cubic-bezier(0.2,0.7,0.2,1)]">
              kukuhdev.com
            </h2>
            <b className="block font-extrabold text-[0.8rem] tracking-[0.3em] mt-4 text-[#4fa3d9]">
              {preloaderPercent}%
            </b>
          </div>
          <button
            onClick={handleSkipPreloader}
            className="absolute right-[5vw] bottom-[5vh] bg-transparent border border-white/25 text-white rounded-full px-5 py-2 text-xs font-medium hover:border-white transition-colors"
          >
            Skip
          </button>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${cursorExpanded ? 'expanded' : ''}`}
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        }}
      />

      {/* Top Scroll Reading Bar */}
      <div
        id="bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#2f6fed] via-[#4fa3d9] to-[#c9a24b] z-50 pointer-events-none transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Project Preview (Cursor hover follower) */}
      <div
        className="fixed left-0 top-0 w-[280px] h-[200px] rounded-2xl pointer-events-none z-50 grid items-end p-4 text-white font-['Instrument_Serif'] text-[1.6rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-200"
        style={{
          opacity: hoverPreview.show ? 1 : 0,
          transform: `translate(${hoverPreview.x + 24}px, ${hoverPreview.y - 100}px) scale(${hoverPreview.show ? 1 : 0.6})`,
          background: 'linear-gradient(135deg, #2f6fed, #0b1220)',
        }}
      >
        <span className="relative z-10">{hoverPreview.text}</span>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-[5vw] py-3.5 backdrop-blur-md bg-[#0a1020]/75 border-b border-[#22304a]/50">
        <b className="flex items-center gap-1.5 font-extrabold text-[1.15rem] tracking-tight">
          kukuhdev<em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">.com</em>
          <svg className="w-5 h-5 text-[#4fa3d9] animate-[spin_8s_linear_infinite]" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M10 1v18M2.2 5.5l15.6 9M2.2 14.5l15.6-9" />
          </svg>
        </b>
        <div className="flex items-center gap-6 text-[0.85rem] font-medium text-[#8a97ad]">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#index" className="hover:text-white transition-colors">Index</a>
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a
            href="#contact"
            className="border border-[#22304a] hover:border-[#4fa3d9] rounded-full px-4 py-1.5 text-white transition-all hover:bg-white/5"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero Section (700vh 3D Tunnel) */}
      <header id="hero" ref={heroRef} className="h-[700vh] relative">
        <div id="stage" className="sticky top-0 h-screen overflow-hidden">
          {/* Header Marquee location strip */}
          <div className="absolute top-16 left-0 right-0 z-10 overflow-hidden whitespace-nowrap text-[#8a97ad] text-[0.72rem] tracking-[0.25em] border-y border-[#22304a] py-1.5 uppercase">
            <div className="inline-block animate-[marqueeInfinite_22s_linear_infinite]">
              {Array(4).fill(0).map((_, i) => (
                <span key={i} className="inline-flex gap-8 px-4">
                  <span>Purbalingga</span><span>·</span>
                  <span>Central Java</span><span>·</span>
                  <span>Indonesia</span><span>·</span>
                  <span>Remote</span><span>·</span>
                  <span>Worldwide</span><span>·</span>
                </span>
              ))}
            </div>
          </div>

          {/* 3D World Container */}
          <div id="world" ref={worldRef} className="absolute inset-0">
            {TECH_ITEMS.map(([tech, abbr, color, site], i) => {
              const DEPTH = 5200;
              const side = i % 2 ? 1 : -1;
              const r = i % 3;
              const x = side * (18 + r * 10);
              const y = ((i * 37) % 50) - 25;
              const z = -(i + 1) * DEPTH / TECH_ITEMS.length;

              return (
                <div
                  key={tech}
                  className="tunnel-plane"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}vw, ${y}vh, ${z}px) rotateY(${-side * 18}deg) rotateZ(${side * 3}deg)`,
                  }}
                >
                  <div className="tunnel-frame" style={{ '--g': color }}>
                    {/* Fake Browser Titlebar */}
                    <div className="relative flex items-center gap-1.5 h-7 px-2.5 bg-[#1a1d27] text-[0.6rem] text-white/80 z-10">
                      <b className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
                      <b className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
                      <b className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                      <u className="ml-2 no-underline opacity-70 font-mono">{site}</u>
                      <em
                        className="ml-auto not-italic flex items-center gap-1.5 px-2 py-0.5 rounded-full text-white text-[0.6rem] font-bold tracking-wider"
                        style={{ background: color }}
                      >
                        <s className="no-underline grid place-items-center w-4 h-4 rounded bg-black/30 text-[0.5rem]">{abbr}</s>
                        {tech}
                      </em>
                    </div>

                    {/* Window viewport mockup */}
                    <div className="h-[272px] bg-slate-900 p-4 text-left overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span className="font-bold text-white tracking-widest">{tech}</span>
                          <span className="font-mono text-[10px] text-cyan-400">CORE FRAMEWORK</span>
                        </div>
                        <h4 className="text-white font-semibold text-lg leading-tight mb-2">
                          Production Ready Systems
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Clean code, scalable database design, and resilient architecture built with {tech}.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Latency: 24ms</span>
                        <span className="text-emerald-400">● 99.9% Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Hero Title */}
          <div className="absolute inset-0 grid place-content-center text-center pointer-events-none z-10 px-[5vw]">
            <h1 className="text-[clamp(2.6rem,9vw,7.2rem)] tracking-tight leading-[0.95] font-extrabold">
              Software that<br />
              <em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">assumes</em> its role.
            </h1>
            <p className="font-['Instrument_Serif'] italic text-[#8a97ad] text-[1.15rem] mt-4">
              (Kukuh Dwi Saputra — kukuhdev.com)
            </p>
          </div>

          {/* Bottom HUD */}
          <div
            id="hud"
            ref={hudRef}
            className="absolute left-1/2 bottom-16 -translate-x-1/2 z-20 flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-[#0b0d13]/90 border border-white/20 text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md pointer-events-none"
          >
            <s
              className="no-underline grid place-items-center w-10 h-10 rounded-xl font-extrabold text-sm text-white"
              style={{ background: TECH_ITEMS[activeTunnelIdx][2] }}
            >
              {TECH_ITEMS[activeTunnelIdx][1]}
            </s>
            <span className="font-extrabold tracking-widest text-[clamp(0.9rem,2.4vw,1.3rem)]">
              {TECH_ITEMS[activeTunnelIdx][0]}
            </span>
          </div>

          {/* Hint */}
          <div className="absolute bottom-7 w-full text-center text-[#8a97ad] text-xs tracking-[0.2em] z-10 animate-[pulseHint_2s_infinite]">
            SCROLL TO FLY THROUGH ↓
          </div>
        </div>
      </header>

      {/* NEW: 3D Motion Sequence 1 (150 Frames from /motion1/) */}
      <MotionSequence1 />

      {/* Infinite Tech Marquee */}
      <div className="overflow-hidden whitespace-nowrap border-y border-[#22304a] py-4 text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-tight bg-[#111a2e]/30">
        <div className="inline-block animate-[marqueeInfinite_28s_linear_infinite]">
          {Array(2).fill(0).map((_, i) => (
            <span key={i}>
              <span className="mx-7">React</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-7 font-['Instrument_Serif'] italic font-normal text-[#4fa3d9]">Laravel</span><span>·</span>
              <span className="mx-7">Next.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-7 font-['Instrument_Serif'] italic font-normal text-[#4fa3d9]">PostgreSQL</span><span>·</span>
              <span className="mx-7">Vue.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-7 font-['Instrument_Serif'] italic font-normal text-[#4fa3d9]">Node.js</span><span>·</span>
              <span className="mx-7">Docker</span><span className="text-[#4fa3d9]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto Section */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[16vh]" id="about">
        <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-[1.1rem]">
          (Manifesto)
        </div>
        <p className="text-[clamp(1.7rem,4.6vw,3.6rem)] leading-[1.15] font-bold tracking-tight mt-5">
          {manifestoWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] text-[#e8edf5]">
              {word}
            </span>
          ))}
        </p>

        {/* Dictionary Definition Card */}
        <div className="mt-[8vh] border border-[#22304a] rounded-[22px] p-8 grid gap-2.5 bg-[#111a2e]/60 backdrop-blur-md max-w-[620px]">
          <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-sm">(Definition)</div>
          <h3 className="font-['Instrument_Serif'] font-normal text-[clamp(2.2rem,5vw,3.4rem)] leading-none">
            dev·el·op·er
          </h3>
          <small className="text-[#8a97ad] font-mono">\ ˈdɛv.ə.lɒp.ər \ · noun</small>
          <p className="text-[#e8edf5] text-base leading-relaxed mt-2">
            1. Someone who turns messy business problems into reliable, maintainable software.
          </p>
          <small className="text-[#8a97ad] block pt-2 border-t border-[#22304a]">
            syn. build · ship · maintain · own.
          </small>
          <small className="text-[#8a97ad] block">
            Informatics Engineering graduate, Telkom University · BNSP-certified Junior Web Developer · GPA 3.73
          </small>
        </div>
      </section>

      {/* Pinned Case-Study Showcase (600vh scroll container) */}
      <section id="work" ref={caseSectionRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen grid place-content-center justify-items-center gap-5 overflow-hidden pt-12">
          {/* Big background counter */}
          <div className="absolute left-[4vw] bottom-[6vh] font-['Instrument_Serif'] text-[clamp(4rem,14vw,11rem)] leading-[0.8] text-[#22304a] z-0 select-none">
            <b>{CASE_STUDIES[activeCaseIdx].num}</b>
            <span className="text-[0.25em] text-[#8a97ad]"> / 05</span>
          </div>

          {/* Slide Deck Container */}
          <div className="showcase-stage">
            {CASE_STUDIES.map((cs, idx) => {
              const stateClass = idx === activeCaseIdx ? 'active' : idx < activeCaseIdx ? 'past' : '';
              return (
                <div
                  key={cs.title}
                  className={`showcase-slide ${stateClass}`}
                  style={{ borderColor: cs.color }}
                >
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-mono">
                      {cs.stack}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Caption */}
          <div className="text-center z-10 max-w-[540px]">
            <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-sm">(Case study)</div>
            <h3 className="font-['Instrument_Serif'] text-[clamp(2rem,5vw,3.4rem)] leading-tight my-1 text-white">
              {CASE_STUDIES[activeCaseIdx].title}
            </h3>
            <p className="text-[#8a97ad] text-sm">
              {CASE_STUDIES[activeCaseIdx].client} · {CASE_STUDIES[activeCaseIdx].desc}
            </p>
          </div>
        </div>
      </section>

      {/* The Full Index Section */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[14vh]" id="index">
        <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-[1.1rem]">(Index)</div>
        <h2 className="text-[clamp(2.4rem,8vw,6.6rem)] leading-[0.98] tracking-tight font-extrabold my-5">
          The full <em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">index.</em>
        </h2>

        <div className="divide-y divide-[#22304a] border-y border-[#22304a] mt-8">
          {CASE_STUDIES.map((item) => (
            <a
              key={item.num}
              href={item.url || '#'}
              target={item.url ? '_blank' : '_self'}
              rel="noreferrer"
              className="interactive-target grid grid-cols-[60px_1fr_auto_40px] md:grid-cols-[70px_1fr_auto_40px] gap-5 items-center py-7 text-inherit no-underline transition-all duration-300 hover:pl-4 hover:text-[#4fa3d9]"
              onMouseEnter={(e) => setHoverPreview({ show: true, text: item.tag, x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setHoverPreview({ show: false, text: '', x: 0, y: 0 })}
            >
              <small className="text-[#8a97ad] font-mono text-sm">{item.num}</small>
              <div>
                <b className="block text-xs font-semibold tracking-wider text-[#8a97ad] mb-1 font-sans">
                  {item.client} {item.url && '· LIVE'}
                </b>
                <h3 className="font-['Instrument_Serif'] text-[clamp(1.6rem,4vw,3.4rem)] leading-none">
                  {item.title}
                </h3>
              </div>
              <p className="hidden md:block text-[#8a97ad] text-sm max-w-[280px]">
                {item.desc}
              </p>
              <i className="not-italic text-2xl text-[#8a97ad]">{item.url ? '↗' : '→'}</i>
            </a>
          ))}
        </div>
      </section>

      {/* Expertise / The Method Section */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[14vh]" id="expertise">
        <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-[1.1rem]">(The method)</div>
        <h2 className="text-[clamp(2.4rem,8vw,6.6rem)] leading-[0.98] tracking-tight font-extrabold my-5">
          Four territories, <em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">one standard.</em>
        </h2>

        <div className="divide-y divide-[#22304a] border-y border-[#22304a] mt-8">
          {TERRITORIES.map((terr, idx) => {
            const isOpen = openTerritoryIdx === idx;
            return (
              <div
                key={terr.title}
                className="interactive-target py-7 cursor-pointer transition-colors group"
                onClick={() => setOpenTerritoryIdx(isOpen ? null : idx)}
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-['Instrument_Serif'] text-[clamp(2rem,6vw,4.6rem)] leading-none group-hover:text-[#4fa3d9] transition-colors">
                    {terr.title}
                  </h3>
                  <small className="text-[#8a97ad] font-mono text-xs">{terr.num}</small>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#8a97ad] text-base mb-4 max-w-xl">{terr.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {terr.chips.map((chip) => (
                      <em
                        key={chip}
                        className="not-italic text-xs px-3 py-1 rounded-full border border-[#22304a] bg-[#111a2e] text-[#8a97ad]"
                      >
                        {chip}
                      </em>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Marquee Clients */}
      <div className="overflow-hidden whitespace-nowrap border-y border-[#22304a] py-4 text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-tight bg-[#111a2e]/30">
        <div className="inline-block animate-[marqueeInfinite_20s_linear_infinite]">
          {Array(2).fill(0).map((_, i) => (
            <span key={i}>
              <span className="mx-6">NDK Exhaust</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-['Instrument_Serif'] italic font-normal text-[#4fa3d9]">RGN Performance</span><span>·</span>
              <span className="mx-6">DSP Agency</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-['Instrument_Serif'] italic font-normal text-[#4fa3d9]">PT. Cazh Technology</span><span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Contact Section with Motion 2 Ambient Background */}
      <section className="relative overflow-hidden py-[16vh] border-t border-[#22304a]" id="contact">
        {/* NEW: 3D Motion Background 2 (300 Frames from /motion2/) */}
        <MotionBackground2 />

        <div className="relative z-10 max-w-[1200px] mx-auto px-[6vw]">
          <div className="font-['Instrument_Serif'] italic text-[#8a97ad] text-[1.1rem]">(Contact)</div>
          <h2 className="text-[clamp(2.4rem,8vw,6.6rem)] leading-[0.98] tracking-tight font-extrabold my-5">
            Let's build something <em className="font-['Instrument_Serif'] font-normal italic text-[#4fa3d9]">worth owning.</em>
          </h2>

          <a
            href="mailto:kukuhdwi010@gmail.com"
            className="interactive-target inline-block font-['Instrument_Serif'] text-[clamp(1.4rem,4.2vw,3rem)] text-[#e8edf5] border-b border-[#4fa3d9] pb-1 hover:text-[#4fa3d9] transition-colors"
          >
            kukuhdwi010@gmail.com
          </a>

          <div className="flex flex-wrap gap-3.5 mt-9">
            <a
              href="https://wa.me/6281392489452"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-7 py-3 rounded-full bg-gradient-to-r from-[#2f6fed] to-[#4fa3d9] text-white font-bold hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(47,111,237,0.3)] backdrop-blur-sm"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/kukuh-dwi-s/"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-7 py-3 rounded-full border border-[#22304a] bg-[#111a2e]/60 backdrop-blur-md text-white font-bold hover:border-[#4fa3d9] hover:bg-white/5 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kukuhdwis"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-7 py-3 rounded-full border border-[#22304a] bg-[#111a2e]/60 backdrop-blur-md text-white font-bold hover:border-[#4fa3d9] hover:bg-white/5 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Giant Watermark */}
      <div className="giant-stroke-text select-none">
        KUKUHDEV.COM
      </div>

      {/* Footer */}
      <footer className="text-center text-[#8a97ad] text-xs py-10 px-[5vw] border-t border-[#22304a]/40 bg-[#070b14]">
        © 2026 Kukuh Dwi Saputra · kukuhdev.com · Purbalingga, Central Java, Indonesia
      </footer>
    </div>
  );
}

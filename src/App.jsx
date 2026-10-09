import React, { useState, useEffect, useRef } from 'react';




const CASE_STUDIES = [
  {
    id: 'p1',
    num: '01',
    client: 'NDK Exhaust × RGN Performance',
    title: 'E-Katalog & Warehouse',
    desc: 'Real-time inventory, barcode/QR tracking and role-based logistics.',
    color: '#2f6fed',
    image: '/projects/p1-ndk.png',
    url: 'https://warehouse.ndkexhaust.com/',
    tag: 'E-Katalog & WMS',
    stack: 'React · Firebase · Tailwind',
  },
  {
    id: 'p2',
    num: '02',
    client: 'DSP Agency · Belgium',
    title: 'Lead Tracking CRM',
    desc: 'Lead tracking and workflow automation with REST integrations.',
    color: '#4fa3d9',
    tag: 'Lead CRM',
    stack: 'Laravel · MySQL',
  },
  {
    id: 'p3',
    num: '03',
    client: 'PT. Cazh Technology',
    title: 'Order & Task Platform',
    desc: 'Order dashboard with role-based access control.',
    color: '#1d4ed8',
    tag: 'Order Platform',
    stack: 'Laravel · Livewire · RBAC',
  },
  {
    id: 'p4',
    num: '04',
    client: 'Academic Capstone',
    title: 'Laundry Decision System',
    desc: 'AHP method to compare services by price, speed and quality.',
    color: '#0f766e',
    tag: 'AHP Laundry DSS',
    stack: 'Laravel · MySQL',
  },
  {
    id: 'p5',
    num: '05',
    client: 'Personal Automation',
    title: 'Job Vacancy Finder',
    desc: 'N8N workflow scraping and filtering jobs into Google Sheets.',
    color: '#3b5b9e',
    tag: 'Job Finder',
    stack: 'N8N · Webhooks',
  },
];

/**
 * Clean Business UI Mockups for Selected Projects (Realistic, Bright & White-Dominant)
 */
function MockupDSP() {
  return (
    <div className="w-full h-full bg-white text-slate-800 p-3 select-none flex flex-col justify-between text-[11px] font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white shadow-xs">
            DSP
          </div>
          <span className="font-semibold text-slate-900 text-[11px]">Leads CRM · Belgium</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> REST Synced
          </span>
          <span className="text-[10px] text-slate-400 font-mono">BE-EU</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2">
          <div className="text-[9px] text-slate-500 font-medium">Active Leads</div>
          <div className="text-sm font-bold text-slate-900 mt-0.5">142 <span className="text-[9px] text-emerald-600 font-semibold">+12%</span></div>
        </div>
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2">
          <div className="text-[9px] text-slate-500 font-medium">In Pipeline</div>
          <div className="text-sm font-bold text-blue-600 mt-0.5">€48,500</div>
        </div>
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2">
          <div className="text-[9px] text-slate-500 font-medium">Win Rate</div>
          <div className="text-sm font-bold text-emerald-600 mt-0.5">31.8%</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex-1 flex flex-col justify-between shadow-xs">
        <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr] px-2.5 py-1.5 bg-slate-50 text-[9px] font-mono font-semibold text-slate-600 border-b border-slate-200">
          <span>COMPANY</span>
          <span>CITY</span>
          <span>STATUS</span>
          <span className="text-right">DEAL</span>
        </div>
        <div className="divide-y divide-slate-100 text-[10px]">
          <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-semibold text-slate-900 truncate">Van De Berg Logistics</span>
            <span className="text-slate-500">Antwerp 🇧🇪</span>
            <span><span className="px-1.5 py-0.5 rounded text-[8px] bg-blue-50 text-blue-700 border border-blue-200 font-medium">Negotiation</span></span>
            <span className="text-right font-mono font-semibold text-slate-800">€14.5k</span>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-semibold text-slate-900 truncate">Brussel Creative Studio</span>
            <span className="text-slate-500">Brussels 🇧🇪</span>
            <span><span className="px-1.5 py-0.5 rounded text-[8px] bg-amber-50 text-amber-700 border border-amber-200 font-medium">Proposal</span></span>
            <span className="text-right font-mono font-semibold text-slate-800">€8.2k</span>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-semibold text-slate-900 truncate">Flanders Tech BVBA</span>
            <span className="text-slate-500">Ghent 🇧🇪</span>
            <span><span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">Won</span></span>
            <span className="text-right font-mono font-semibold text-slate-800">€19.0k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupCazh() {
  return (
    <div className="w-full h-full bg-white text-slate-800 p-3 select-none flex flex-col justify-between text-[11px] font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white shadow-xs">
            C
          </div>
          <div>
            <span className="font-semibold text-slate-900 text-[11px]">CAZH Admin Portal</span>
            <span className="text-[9px] text-slate-500 block -mt-0.5">Order & Dispatch Management</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded text-[9px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
            RBAC: Superadmin
          </span>
          <span className="text-[9px] text-emerald-600 font-mono font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Livewire
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 my-2 text-[9px] font-medium">
        <span className="px-2 py-1 rounded bg-blue-600 text-white shadow-xs">Semua (128)</span>
        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">Diproses (14)</span>
        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">Verifikasi (6)</span>
        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">Selesai (108)</span>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex-1 flex flex-col justify-between shadow-xs">
        <div className="grid grid-cols-[0.9fr_1.3fr_1fr_0.8fr] px-2.5 py-1.5 bg-slate-50 text-[9px] font-mono font-semibold text-slate-600 border-b border-slate-200">
          <span>NO. ORDER</span>
          <span>INSTANSI / MITRA</span>
          <span>ITEM / LAYANAN</span>
          <span className="text-right">STATUS</span>
        </div>
        <div className="divide-y divide-slate-100 text-[10px]">
          <div className="grid grid-cols-[0.9fr_1.3fr_1fr_0.8fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-mono text-blue-600 font-semibold">#ORD-8821</span>
            <span className="text-slate-900 font-medium truncate">SDN 1 Purbalingga</span>
            <span className="text-slate-500 text-[9px] truncate">45x RFID Smart Card</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-amber-50 text-amber-700 border border-amber-200 font-medium">Diproses</span></span>
          </div>
          <div className="grid grid-cols-[0.9fr_1.3fr_1fr_0.8fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-mono text-blue-600 font-semibold">#ORD-8820</span>
            <span className="text-slate-900 font-medium truncate">Kantin Kejujuran CAZH</span>
            <span className="text-slate-500 text-[9px] truncate">12x POS Terminal</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">Selesai</span></span>
          </div>
          <div className="grid grid-cols-[0.9fr_1.3fr_1fr_0.8fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-mono text-blue-600 font-semibold">#ORD-8819</span>
            <span className="text-slate-900 font-medium truncate">SMK Telkom Purwokerto</span>
            <span className="text-slate-500 text-[9px] truncate">Topup Saldo Billing</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-sky-50 text-sky-700 border border-sky-200 font-medium">Verifikasi</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupAHP() {
  return (
    <div className="w-full h-full bg-white text-slate-800 p-3 select-none flex flex-col justify-between text-[11px] font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-teal-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-teal-600 flex items-center justify-center font-bold text-[10px] text-white shadow-xs">
            AHP
          </div>
          <div>
            <span className="font-semibold text-slate-900 text-[11px]">SPK Pemilihan Laundry</span>
            <span className="text-[9px] text-teal-700 block -mt-0.5">Metode Analytical Hierarchy Process</span>
          </div>
        </div>
        <div className="text-right font-mono text-[9px]">
          <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 font-medium">
            CR = 0.041 &lt; 0.1 (Valid)
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-1.5 my-2 bg-teal-50/60 border border-teal-200/80 rounded-lg p-2 text-[9px]">
        <div><span className="text-slate-600">Harga:</span> <b className="text-teal-800 font-mono font-bold">38%</b></div>
        <div><span className="text-slate-600">Kecepatan:</span> <b className="text-teal-800 font-mono font-bold">28%</b></div>
        <div><span className="text-slate-600">Kualitas:</span> <b className="text-teal-800 font-mono font-bold">21%</b></div>
        <div><span className="text-slate-600">Layanan:</span> <b className="text-teal-800 font-mono font-bold">13%</b></div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex-1 flex flex-col justify-between shadow-xs">
        <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] px-2.5 py-1.5 bg-slate-50 text-[9px] font-mono font-semibold text-slate-600 border-b border-slate-200">
          <span>RANK</span>
          <span>ALTERNATIF LAUNDRY</span>
          <span className="text-center">VEKTOR EIGEN</span>
          <span className="text-right">KEPUTUSAN</span>
        </div>
        <div className="divide-y divide-slate-100 text-[10px]">
          <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] px-2.5 py-1.5 items-center bg-teal-50/40">
            <span className="font-bold text-amber-600 font-mono">#1</span>
            <span className="font-semibold text-slate-900 truncate">FreshClean Laundry</span>
            <span className="text-center font-mono font-semibold text-teal-800">0.842</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">Terpilih ★</span></span>
          </div>
          <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-bold text-slate-400 font-mono">#2</span>
            <span className="text-slate-700 truncate font-medium">Melati Wash & Iron</span>
            <span className="text-center font-mono text-slate-600">0.765</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-slate-100 text-slate-700 border border-slate-200">Alternatif 2</span></span>
          </div>
          <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] px-2.5 py-1.5 items-center hover:bg-slate-50/50">
            <span className="font-bold text-slate-400 font-mono">#3</span>
            <span className="text-slate-700 truncate font-medium">Berkah Express Kiloan</span>
            <span className="text-center font-mono text-slate-600">0.689</span>
            <span className="text-right"><span className="px-1.5 py-0.5 rounded text-[8px] bg-slate-100 text-slate-700 border border-slate-200">Alternatif 3</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupN8N() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 p-3 select-none flex flex-col justify-between text-[11px] font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center font-bold text-[10px] text-white shadow-xs font-mono">
            n8n
          </div>
          <div>
            <span className="font-semibold text-slate-900 text-[11px]">Workflow: job-scraper-alerts</span>
            <span className="text-[9px] text-slate-500 block -mt-0.5">Automated Job Finding Pipeline</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active (07:00 WIB)
        </span>
      </div>

      <div className="my-2 bg-white rounded-lg border border-slate-200 p-2.5 shadow-xs">
        <div className="text-[9px] font-mono text-slate-500 mb-2 flex items-center justify-between font-medium">
          <span>WORKFLOW EXECUTION NODES</span>
          <span className="text-emerald-600 font-semibold">Execution: 1.8s · 100% Success</span>
        </div>
        <div className="flex items-center justify-between gap-1 text-[9px] font-mono">
          <div className="bg-slate-50 border border-orange-200 rounded p-1.5 text-center flex-1 shadow-xs">
            <div className="text-orange-600 font-bold text-[8px]">CRON</div>
            <div className="text-slate-800 font-medium truncate text-[9px]">07:00 AM</div>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="bg-slate-50 border border-blue-200 rounded p-1.5 text-center flex-1 shadow-xs">
            <div className="text-blue-600 font-bold text-[8px]">SCRAPER</div>
            <div className="text-slate-800 font-medium truncate text-[9px]">Job Portals</div>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="bg-slate-50 border border-purple-200 rounded p-1.5 text-center flex-1 shadow-xs">
            <div className="text-purple-600 font-bold text-[8px]">FILTER</div>
            <div className="text-slate-800 font-medium truncate text-[9px]">Dev & Tech</div>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="bg-slate-50 border border-emerald-200 rounded p-1.5 text-center flex-1 shadow-xs">
            <div className="text-emerald-600 font-bold text-[8px]">SHEETS</div>
            <div className="text-slate-800 font-medium truncate text-[9px]">Sync Sheet</div>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="bg-slate-50 border border-sky-200 rounded p-1.5 text-center flex-1 shadow-xs">
            <div className="text-sky-600 font-bold text-[8px]">BOT</div>
            <div className="text-slate-800 font-medium truncate text-[9px]">Telegram</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-2 flex items-center justify-between text-[10px] shadow-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-600 font-bold">✓</span>
          <span className="text-slate-700 font-medium">Last run: 48 lowongan dipindai, 5 cocok</span>
        </div>
        <span className="font-mono text-[9px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-medium">
          Telegram Alert Sent
        </span>
      </div>
    </div>
  );
}



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
 * Hero 3D Motion Background Canvas (150 frames from /motion1/)
 * Renders dynamically behind the floating cards, moving frame-by-frame only as the user scrolls
 */
function HeroMotionBackground({ progress }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const TOTAL_FRAMES = 150;

  const renderFrame = (idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[idx];

    if (img && img.complete && img.naturalWidth > 0) {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth || 1200;
        canvas.height = canvas.clientHeight || 800;
      }

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
  };

  useEffect(() => {
    const images = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/motion1/ezgif-frame-${padZero(i)}.webp`;
      if (i === 1) {
        img.onload = () => renderFrame(1);
      }
      images[i] = img;
    }
    imagesRef.current = images;

    const handleResize = () => renderFrame(currentFrameRef.current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const frameIdx = Math.min(TOTAL_FRAMES, Math.max(1, Math.round((progress || 0) * (TOTAL_FRAMES - 1)) + 1));
    currentFrameRef.current = frameIdx;
    requestAnimationFrame(() => renderFrame(frameIdx));
  }, [progress]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-90 filter contrast-105"
      />
      {/* Seamless radial and edge gradients to blend portrait into dark navy theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-[#0a1020]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/80 via-transparent to-[#0a1020]/80" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-transparent to-[#0a1020]/60" />
    </div>
  );
}

/**
 * Contact Portrait Component (Single frame facing straight forward)
 */
function ContactPortrait() {
  return (
    <div className="w-full h-full relative pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      <img
        src="/motion2/ezgif-frame-001.jpg"
        alt="Kukuh Dwi Saputra"
        className="w-full h-full object-cover object-top md:object-center opacity-50 md:opacity-90 filter contrast-105 brightness-105"
        loading="lazy"
      />
      {/* Blend seamlessly into dark navy on the left (behind the text) and edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020] via-[#0a1020]/95 md:via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-[#0a1020]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020]/50 via-transparent to-[#0a1020] pointer-events-none" />
    </div>
  );
}

function ProjectMockupCard({ project, onClose, isMobile = false }) {
  if (!project) return null;
  return (
    <div className={`w-full ${isMobile ? 'max-w-sm' : 'w-[360px] sm:w-[450px]'} rounded-2xl bg-white border border-slate-200 shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_35px_rgba(47,111,237,0.2)] overflow-hidden text-slate-800`}>
      {/* Mockup Browser Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-100 border-b border-slate-200 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-slate-500 text-[10px] truncate max-w-[170px]">
          {project.url ? project.url.replace('https://', '') : project.client}
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="text-[9px] font-mono font-bold text-white px-2 py-0.5 rounded-full shadow-xs"
            style={{ background: project.color }}
          >
            {project.num}
          </span>
          {isMobile && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-800 font-bold px-1.5 py-0.5 text-xs rounded hover:bg-slate-200 transition-colors ml-1"
              aria-label="Close preview"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* High-Resolution Project Mockup / Screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white flex flex-col">
        {project.id === 'p1' ? (
          <div className="relative w-full h-full">
            <img
              src="/projects/p1-ndk.png"
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : project.id === 'p2' ? (
          <MockupDSP />
        ) : project.id === 'p3' ? (
          <MockupCazh />
        ) : project.id === 'p4' ? (
          <MockupAHP />
        ) : project.id === 'p5' ? (
          <MockupN8N />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Mockup Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <div className="min-w-0 pr-2">
          <b className="block text-slate-900 text-xs font-semibold truncate">{project.title}</b>
          <span className="text-[11px] text-slate-500 truncate block">
            {project.tag} · <span className="font-mono text-[#2f6fed] font-medium">{project.stack}</span>
          </span>
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#2f6fed] font-semibold font-mono hover:underline shrink-0"
          >
            Visit Live ↗
          </a>
        ) : (
          <span className="text-xs text-[#2f6fed] font-semibold font-mono shrink-0">
            Case Study →
          </span>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [preloaderPercent, setPreloaderPercent] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -50, y: -50 });
  const [cursorExpanded, setCursorExpanded] = useState(false);
  const [hoverPreview, setHoverPreview] = useState({ show: false, project: null, x: 0, y: 0 });
  const [openTerritoryIdx, setOpenTerritoryIdx] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);

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
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive = !!e.target.closest('a, button, [role="button"], .interactive-target, .word-highlight, input');
      setCursorExpanded(isInteractive);
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    document.addEventListener('pointerover', handleMouseOver);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      document.removeEventListener('pointerover', handleMouseOver);
    };
  }, []);

  // Scroll handler for hero background motion scrub & reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Reading progress
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Hero motion background scrub (scrubs through the hero's scroll area)
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight - window.innerHeight;
        if (heroHeight > 0) {
          const p = Math.min(Math.max(scrollY / heroHeight, 0), 1);
          setHeroScrollProgress(p);
        }
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


  // Multi-phase hero transition calculations
  // Phase 1 (0.00 -> 0.40): 3D Motion scrubs smoothly through 150 frames
  const motionProgress = Math.min(1, heroScrollProgress / 0.40);

  // Phase 2 (0.38 -> 0.58): Single simple & smooth circle shrinks down to cover the portrait image
  const shrinkProgress = Math.min(1, Math.max(0, (heroScrollProgress - 0.38) / 0.20));
  const circleRadiusVmax = Math.max(0, (1 - shrinkProgress) * 100);

  // Phase 3 (0.46 -> 0.68): Text section glides naturally from bottom (55vh) into exact center (0vh)
  // Stays stably centered from 0.68 to 1.00 so user can comfortably read it
  const textProgress = Math.min(1, Math.max(0, (heroScrollProgress - 0.46) / 0.22));
  const textOpacity = Math.min(1, textProgress * 1.5);
  const textTranslateY = (1 - textProgress) * 55; // in vh

  // Top location bar gently fades out as the circle starts shrinking
  const topBarOpacity = heroScrollProgress < 0.35
    ? 1
    : Math.max(0, 1 - (heroScrollProgress - 0.35) / 0.15);

  return (
    <div className="relative min-h-screen bg-[#0a1020] text-[#e8edf5] font-sans selection:bg-[#2f6fed] selection:text-white">
      {/* Preloader */}
      {!preloaderDone && (
        <div
          id="pre"
          className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          <div className="text-center overflow-hidden">
            <h2 className="font-extrabold tracking-tight text-[clamp(2.4rem,9vw,6rem)] leading-none animate-[upPreload_1s_0.1s_both_cubic-bezier(0.2,0.7,0.2,1)]">
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
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Top Scroll Reading Bar */}
      <div
        id="bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#2f6fed] via-[#4fa3d9] to-[#c9a24b] z-50 pointer-events-none transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Desktop Floating Project Mockup Preview (Cursor follower on project hover) */}
      {hoverPreview.project && hoverPreview.show && (
        <div
          className="hidden md:block fixed pointer-events-none z-50 transition-all duration-150 ease-out"
          style={{
            left: `${Math.min(hoverPreview.x + 24, typeof window !== 'undefined' ? window.innerWidth - 470 : 800)}px`,
            top: `${Math.max(20, Math.min(hoverPreview.y - 140, typeof window !== 'undefined' ? window.innerHeight - 340 : 400))}px`,
            opacity: hoverPreview.show ? 1 : 0,
            transform: hoverPreview.show ? 'scale(1) translate3d(0,0,0)' : 'scale(0.85) translate3d(0,20px,0)',
          }}
        >
          <ProjectMockupCard project={hoverPreview.project} />
        </div>
      )}

      {/* Mobile Modal Project Mockup Preview (Tap/Click trigger on touch screens) */}
      {hoverPreview.project && hoverPreview.show && (
        <div
          className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setHoverPreview({ show: false, project: null, x: 0, y: 0 })}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm pointer-events-auto">
            <ProjectMockupCard
              project={hoverPreview.project}
              isMobile={true}
              onClose={() => setHoverPreview({ show: false, project: null, x: 0, y: 0 })}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-[5vw] py-3.5 backdrop-blur-md bg-[#0a1020]/80 border-b border-[#22304a]/50">
        <div className="flex justify-between items-center">
          <a
            href="#hero"
            className="flex items-center gap-1.5 font-extrabold text-[1.15rem] tracking-tight text-white hover:text-[#4fa3d9] transition-colors"
          >
            kukuhdev<span className="text-[#4fa3d9]">.com</span>
            <svg className="w-5 h-5 text-[#4fa3d9] animate-[spin_8s_linear_infinite]" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M10 1v18M2.2 5.5l15.6 9M2.2 14.5l15.6-9" />
            </svg>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-[0.85rem] font-medium text-[#8a97ad]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a
              href="#contact"
              className="border border-[#22304a] hover:border-[#4fa3d9] rounded-full px-4 py-1.5 text-white transition-all hover:bg-white/5"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-[#22304a] text-[#8a97ad] hover:text-white hover:border-[#4fa3d9] transition-colors focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#22304a]/60 flex flex-col gap-3 text-sm font-medium animate-in fade-in duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#8a97ad] hover:text-white py-1 transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#8a97ad] hover:text-white py-1 transition-colors"
            >
              Work & Projects
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#8a97ad] hover:text-white py-1 transition-colors"
            >
              Expertise
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center border border-[#4fa3d9] rounded-full px-4 py-2 text-white bg-[#4fa3d9]/15 hover:bg-[#4fa3d9]/30 transition-all font-semibold mt-1"
            >
              Let's talk
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION: Motion Background -> Single simple circle shrink -> Text glides from bottom to center */}
      <header id="hero" ref={heroRef} className="h-[320vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between items-center bg-[#0a1020]">
          {/* Single simple & smooth circular mask covering the image */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-75"
            style={{
              clipPath: `circle(${circleRadiusVmax}vmax at 50% 45%)`,
              WebkitClipPath: `circle(${circleRadiusVmax}vmax at 50% 45%)`,
              opacity: circleRadiusVmax <= 0.1 ? 0 : 1,
            }}
          >
            <HeroMotionBackground progress={motionProgress} />
          </div>

          {/* Location Bar at Top */}
          <div
            className="w-full z-10 pt-16 overflow-hidden whitespace-nowrap text-[#8a97ad] text-[0.72rem] tracking-[0.25em] border-b border-[#22304a]/60 py-1.5 uppercase backdrop-blur-sm transition-opacity duration-150"
            style={{ opacity: topBarOpacity }}
          >
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

          {/* Next Section: Glides smoothly from bottom to center just like scrolling a webpage */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20 pointer-events-none transition-all duration-75"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textTranslateY}vh)`,
              pointerEvents: textOpacity > 0.7 ? 'auto' : 'none',
            }}
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#4fa3d9] mb-3">
                Kukuh Dwi Saputra · Full-Stack Developer
              </span>
              <h1 className="text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold tracking-tight leading-[1.02] text-white drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
                Software that <span className="text-[#4fa3d9]">assumes</span> its role.
              </h1>
              <p className="text-[#8a97ad] text-base md:text-lg max-w-xl mt-4 leading-relaxed font-light">
                Engineering reliable backends, high-performance UI state, and production systems built to withstand real business demands.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#about"
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-white px-6 py-3 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 backdrop-blur-md transition-all shadow-lg flex items-center gap-2 group"
                >
                  <span>Read Manifesto</span>
                  <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
                <a
                  href="#work"
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#4fa3d9] hover:text-white px-6 py-3 rounded-full border border-[#4fa3d9]/40 hover:border-[#4fa3d9] bg-[#4fa3d9]/10 hover:bg-[#4fa3d9]/25 backdrop-blur-md transition-all shadow-lg flex items-center gap-2 group"
                >
                  <span>Explore Work</span>
                  <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
              </div>
            </div>

            {textOpacity > 0.7 && (
              <div className="absolute bottom-8 left-0 right-0 text-center text-[#8a97ad] text-[10px] tracking-[0.3em] uppercase pointer-events-none animate-pulse">
                Continue scrolling ↓
              </div>
            )}
          </div>

          {/* Initial Scroll Prompt (Fades out quickly upon initial scroll) */}
          <div
            className="w-full text-center pb-4 z-20 text-[#8a97ad] text-[10px] tracking-[0.25em] uppercase pointer-events-none transition-opacity duration-200"
            style={{
              opacity: Math.max(0, 1 - heroScrollProgress * 5),
            }}
          >
            Scroll to scrub motion ↓
          </div>
        </div>
      </header>

      {/* Infinite Tech Marquee (Seamless 100% full-width two-track loop) */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-[#22304a] py-4 text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-tight bg-[#111a2e]/30 flex select-none">
        <div className="flex shrink-0 items-center justify-around min-w-full animate-[marqueeLoop_24s_linear_infinite]">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">React</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">Laravel</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Next.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">PostgreSQL</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Vue.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">Node.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Docker</span><span className="text-[#4fa3d9]">·</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center justify-around min-w-full animate-[marqueeLoop_24s_linear_infinite]" aria-hidden="true">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">React</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">Laravel</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Next.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">PostgreSQL</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Vue.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">Node.js</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">Docker</span><span className="text-[#4fa3d9]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto Section */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[16vh]" id="about">
        <div className="font-mono text-xs uppercase tracking-widest text-[#4fa3d9] mb-3">
          // Perspective
        </div>
        <p className="text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.45] font-normal text-[#e8edf5] tracking-normal mt-6 max-w-4xl flex flex-wrap gap-x-[0.35em] gap-y-1 select-none">
          {"Most developers try to stand out with the newest stack. The real work happens elsewhere: clean code, careful database design, and systems that keep running after launch. I build web applications that businesses can rely on, and I own every line of it."
            .split(' ')
            .map((word, i) => (
              <span
                key={i}
                className="word-highlight transition-all duration-150 hover:text-[#4fa3d9] hover:scale-105 cursor-pointer inline-block"
              >
                {word}
              </span>
            ))}
        </p>

        {/* Dictionary Definition Card */}
        <div className="mt-[8vh] border border-[#22304a] rounded-[22px] p-8 grid gap-2.5 bg-[#111a2e]/60 backdrop-blur-md max-w-[620px]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4fa3d9]">// Definition</div>
          <h3 className="font-extrabold text-[clamp(2rem,4.5vw,3rem)] tracking-tight leading-none text-white">
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

      {/* Selected Work / The Full Index Section with Mockup Preview on Hover */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[16vh]" id="work">
        <div className="font-mono text-xs uppercase tracking-widest text-[#4fa3d9] mb-3">// Selected Work · Index</div>
        <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.02] tracking-tight font-extrabold my-4 text-white">
          Selected <span className="text-[#4fa3d9]">Projects.</span>
        </h2>

        <div className="divide-y divide-[#22304a] border-y border-[#22304a] mt-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.num}
              className="interactive-target grid grid-cols-[36px_1fr_auto] sm:grid-cols-[50px_1fr_auto_30px] md:grid-cols-[70px_1fr_auto_40px] gap-3 sm:gap-4 md:gap-6 items-center py-5 sm:py-7 text-inherit no-underline transition-all duration-300 hover:pl-2 sm:hover:pl-4 hover:text-[#4fa3d9] group cursor-pointer"
              onMouseEnter={(e) => setHoverPreview({ show: true, project: item, x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => setHoverPreview((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))}
              onMouseLeave={() => setHoverPreview({ show: false, project: null, x: 0, y: 0 })}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setHoverPreview({ show: true, project: item, x: 0, y: 0 });
                } else if (item.url) {
                  window.open(item.url, '_blank');
                }
              }}
            >
              <small className="text-[#8a97ad] font-mono text-xs sm:text-sm group-hover:text-white transition-colors">{item.num}</small>
              <div>
                <b className="block text-[11px] sm:text-xs font-semibold tracking-wider text-[#8a97ad] mb-0.5 sm:mb-1 font-sans">
                  {item.client} {item.url && '· LIVE'}
                </b>
                <h3 className="font-bold text-[clamp(1.2rem,3.2vw,2.5rem)] tracking-tight leading-tight group-hover:text-[#4fa3d9] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="hidden md:flex flex-col items-end gap-1 text-right">
                <span className="text-xs font-mono text-white/80 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {item.stack}
                </span>
                <p className="text-[#8a97ad] text-xs max-w-[260px] truncate">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoverPreview({ show: true, project: item, x: 0, y: 0 });
                  }}
                  className="md:hidden text-[10px] font-mono font-medium px-2 py-1 rounded bg-[#111a2e] border border-[#22304a] text-[#4fa3d9] hover:border-[#4fa3d9]"
                  aria-label="Preview project mockup"
                >
                  Preview
                </button>
                <i className="not-italic text-lg sm:text-2xl text-[#8a97ad] group-hover:text-[#4fa3d9] transition-transform group-hover:translate-x-1">
                  {item.url ? '↗' : '→'}
                </i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise / The Method Section */}
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[14vh]" id="expertise">
        <div className="font-mono text-xs uppercase tracking-widest text-[#4fa3d9] mb-3">// The Method</div>
        <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.02] tracking-tight font-extrabold my-4 text-white">
          Four territories, <span className="text-[#4fa3d9]">one standard.</span>
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
                  <h3 className="font-bold text-[clamp(1.8rem,4.5vw,3.2rem)] tracking-tight leading-none group-hover:text-[#4fa3d9] transition-colors">
                    {terr.title}
                  </h3>
                  <small className="text-[#8a97ad] font-mono text-xs">{terr.num}</small>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'
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

      {/* Marquee Clients (Seamless 100% full-width two-track loop) */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-[#22304a] py-4 text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-tight bg-[#111a2e]/30 flex select-none">
        <div className="flex shrink-0 items-center justify-around min-w-full animate-[marqueeLoop_24s_linear_infinite]">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">NDK Exhaust</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">RGN Performance</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">DSP Agency</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">PT. Cazh Technology</span><span className="text-[#4fa3d9]">·</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center justify-around min-w-full animate-[marqueeLoop_24s_linear_infinite]" aria-hidden="true">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">NDK Exhaust</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">RGN Performance</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6">DSP Agency</span><span className="text-[#4fa3d9]">·</span>
              <span className="mx-6 font-semibold text-[#4fa3d9]">PT. Cazh Technology</span><span className="text-[#4fa3d9]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Contact Section with Motion 2 Ambient Background positioned on right side */}
      <section className="relative overflow-hidden py-[12vh] md:py-[16vh] border-t border-[#22304a] bg-[#0a1020]" id="contact">
        {/* 3D Motion Background 2 on the right side of the text, clearly visible */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] lg:w-[45%] pointer-events-none overflow-hidden z-0 flex items-center justify-end">
          <ContactPortrait />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-[6vw]">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#4fa3d9] mb-3">// Contact</div>
            <h2 className="text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight font-extrabold my-4 text-white">
              Let's build something <span className="text-[#4fa3d9]">worth owning.</span>
            </h2>

            <a
              href="mailto:kukuhdwi010@gmail.com"
              className="interactive-target inline-flex items-center gap-2 font-mono text-[clamp(1.1rem,3.2vw,2.4rem)] font-bold text-[#e8edf5] border-b-2 border-[#4fa3d9] pb-1 hover:text-[#4fa3d9] hover:border-white transition-all duration-200 mt-2 break-all"
            >
              kukuhdwi010@gmail.com
              <span className="text-[#4fa3d9] text-base group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/6281392489452"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-6 py-2.5 md:px-7 md:py-3 rounded-full bg-gradient-to-r from-[#2f6fed] to-[#4fa3d9] text-white font-bold hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(47,111,237,0.3)] backdrop-blur-sm text-sm md:text-base"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/kukuh-dwi-s/"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-[#22304a] bg-[#111a2e]/60 backdrop-blur-md text-white font-bold hover:border-[#4fa3d9] hover:bg-white/5 transition-all text-sm md:text-base"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kukuhdwis"
              target="_blank"
              rel="noreferrer"
              className="interactive-target inline-block px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-[#22304a] bg-[#111a2e]/60 backdrop-blur-md text-white font-bold hover:border-[#4fa3d9] hover:bg-white/5 transition-all text-sm md:text-base"
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

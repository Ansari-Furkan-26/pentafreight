import { useState } from 'react';

// Global vertical PENTA Freight badge — fixed to the LEFT side, vertically centered.
// Tries the real Penta Freight logo first; if it fails to load, falls back to a
// guaranteed CSS-rendered orange-on-slate badge that matches the design.
const LOGO_SRC = '/media/badge.png';

export default function BrandSidebar() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div
      aria-hidden
      className="flex fixed left-0 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
    >
        <img
          src={LOGO_SRC}
          alt=""
          onError={() => setImgOk(false)}
          className="h-44 lg:h-52 w-auto select-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          draggable="false"
        />
  
    </div>
  );
}

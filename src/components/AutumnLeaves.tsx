import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

type LeafSpec = {
  left: number;
  scale: number;
  fall: number;
  delay: number;
  sway: number;
  swayTime: number;
  spin: number;
  opacity: number;
  blur: number;
  tone: string;
  shape: 0 | 1 | 2;
};

/**
 * Feuilles d'automne : feuille d'érable (0), feuille simple (1), feuille de vigne (2).
 * Teintées avec les tokens dorés du site, opacité volontairement basse pour rester discret.
 */
const SHAPES = [
  <svg viewBox="0 0 24 24" fill="currentColor" key="maple" aria-hidden="true">
    <path d="M12 1.6l1.9 4.5 3.5-1.7-1 4 4.3.9-3.2 2.8 2.7 3.4-4.3-.4.4 4.3-3.3-2.8-3 3.2.1-4.4-4 1.4 2-3.9-3.6-2.3 4.1-1.2-.6-4.1 3.7 2.2z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor" key="simple" aria-hidden="true">
    <path d="M12 2c4.5 3.2 6.5 8 4.8 13.2-.8 2.4-2.6 4.5-4.8 6.8-2.2-2.3-4-4.4-4.8-6.8C5.5 10 7.5 5.2 12 2Z" />
    <path d="M12 5.4v14.2" stroke="hsl(var(--warm-dark))" strokeWidth=".9" opacity=".45" fill="none" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor" key="vine" aria-hidden="true">
    <path d="M12 2c.9 2.6 2.6 3.9 4.8 4.3-.4 1.9-1.6 3-2.4 4.2 1 1.5.7 3.4-.3 4.8-.7 1-1 2.1-1.1 3.2h-2c-.1-1.1-.4-2.2-1.1-3.2-1-1.4-1.3-3.3-.3-4.8-.8-1.2-2-2.3-2.4-4.2C9.4 5.9 11.1 4.6 12 2Z" />
    <path d="M12 18.5V23" stroke="currentColor" strokeWidth="1" opacity=".6" fill="none" />
  </svg>,
];

const LEAVES: LeafSpec[] = [
  { left: 3,  scale: 0.8,  fall: 26, delay: -4,  sway: 34, swayTime: 9,  spin: 13, opacity: 0.3,  blur: 0.9, tone: "text-gold",         shape: 1 },
  { left: 9,  scale: 1.4,  fall: 19, delay: -11, sway: 52, swayTime: 7,  spin: 9,  opacity: 0.45, blur: 0,   tone: "text-autumn-amber", shape: 0 },
  { left: 16, scale: 0.6,  fall: 29, delay: -19, sway: 26, swayTime: 11, spin: 15, opacity: 0.24, blur: 1.1, tone: "text-cream",        shape: 2 },
  { left: 22, scale: 1.1,  fall: 22, delay: -2,  sway: 44, swayTime: 8,  spin: 11, opacity: 0.4,  blur: 0,   tone: "text-gold",         shape: 2 },
  { left: 29, scale: 0.7,  fall: 27, delay: -14, sway: 30, swayTime: 10, spin: 14, opacity: 0.28, blur: 0.8, tone: "text-gold-light",   shape: 1 },
  { left: 35, scale: 1.6,  fall: 17, delay: -8,  sway: 58, swayTime: 6,  spin: 8,  opacity: 0.5,  blur: 0,   tone: "text-autumn-honey", shape: 0 },
  { left: 42, scale: 0.9,  fall: 24, delay: -21, sway: 38, swayTime: 9,  spin: 12, opacity: 0.34, blur: 0.6, tone: "text-gold",         shape: 1 },
  { left: 48, scale: 0.5,  fall: 31, delay: -6,  sway: 22, swayTime: 12, spin: 16, opacity: 0.22, blur: 1.2, tone: "text-cream",        shape: 2 },
  { left: 55, scale: 1.2,  fall: 20, delay: -16, sway: 48, swayTime: 7,  spin: 10, opacity: 0.42, blur: 0,   tone: "text-autumn-rust",  shape: 0 },
  { left: 61, scale: 0.75, fall: 25, delay: -1,  sway: 32, swayTime: 10, spin: 13, opacity: 0.3,  blur: 0.7, tone: "text-gold-light",   shape: 1 },
  { left: 68, scale: 1.5,  fall: 18, delay: -12, sway: 55, swayTime: 6,  spin: 8,  opacity: 0.47, blur: 0,   tone: "text-gold",         shape: 2 },
  { left: 74, scale: 0.6,  fall: 30, delay: -23, sway: 28, swayTime: 11, spin: 15, opacity: 0.25, blur: 1,   tone: "text-cream",        shape: 1 },
  { left: 80, scale: 1.0,  fall: 23, delay: -5,  sway: 42, swayTime: 8,  spin: 11, opacity: 0.38, blur: 0.3, tone: "text-autumn-amber", shape: 1 },
  { left: 86, scale: 0.85, fall: 27, delay: -18, sway: 36, swayTime: 9,  spin: 12, opacity: 0.32, blur: 0.8, tone: "text-gold",         shape: 0 },
  { left: 92, scale: 1.3,  fall: 21, delay: -9,  sway: 50, swayTime: 7,  spin: 9,  opacity: 0.44, blur: 0,   tone: "text-autumn-honey", shape: 2 },
  { left: 97, scale: 0.65, fall: 28, delay: -15, sway: 24, swayTime: 12, spin: 14, opacity: 0.26, blur: 1,   tone: "text-cream",        shape: 1 },
];

const AutumnLeaves = () => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {LEAVES.map((leaf, i) => (
        <span
          key={i}
          className="leaf"
          style={
            {
              left: `${leaf.left}%`,
              "--leaf-scale": leaf.scale,
              "--leaf-fall": `${leaf.fall}s`,
              "--leaf-delay": `${leaf.delay}s`,
              "--leaf-sway": `${leaf.sway}px`,
              "--leaf-sway-time": `${leaf.swayTime}s`,
              "--leaf-spin-time": `${leaf.spin}s`,
              "--leaf-opacity": leaf.opacity,
              "--leaf-blur": `${leaf.blur}px`,
            } as CSSProperties
          }
        >
          <span className="leaf-sway">
            <span className={`leaf-spin ${leaf.tone}`}>{SHAPES[leaf.shape]}</span>
          </span>
        </span>
      ))}
    </div>
  );
};

export default AutumnLeaves;
